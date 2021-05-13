const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CssnanoPlugin = require('cssnano-webpack-plugin');
const LinkTypePlugin = require('html-webpack-link-type-plugin').HtmlWebpackLinkTypePlugin;

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
      minSize: 10000,
      maxSize: 500000
    }
  };

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin(),
      new UglifyJsPlugin(),
      new CssnanoPlugin()
    ];
  }
  return config;
};

const filename = ext => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const cssLoaders = extra => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true
      }
    },
    'css-loader'
  ];

  if (extra) {
    loaders.push(extra);
  }
  return loaders;
};

const babelOptions = preset => {
  const opts = {
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-proposal-class-properties']
  };

  if (preset) {
    opts.presets.push(preset);
  }

  return opts;
};

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: babelOptions()
    }
  ];

  if (isDev) {
    loaders.push('eslint-loader');
  }

  return loaders;
};

const plugins = () => {
  const base = [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/favicon.ico'),
        to: path.resolve(__dirname, 'build')
      }
    ]),
    new MiniCssExtractPlugin({
      filename: filename('css'),
      linkType: 'text/css'
    }),
    new LinkTypePlugin({
      '*.css': 'text/css',
      '*.js': 'text/javascript',
      '*.png': 'image/png',
      '*.jpg': 'image/jpeg',
      '*.jpeg': 'image/jpeg',
      '*.gif': 'image/gif',
      '*.webp': 'image/webp',
      '*.bmp': 'image/bmp'
    }),
    new DashboardPlugin()
  ];

  return base;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: process.env.NODE_ENV,
  entry: {
    main: ['@babel/polyfill', './index.js']
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.json', '.png', 'jpg', 'jpeg', 'svg', 'webp', 'jp2', 'pdf']
  },
  optimization: optimization(),
  devServer: {
    port: 3000,
    hot: isDev,
    writeToDisk: true,
    historyApiFallback: true
  },
  devtool: isDev ? 'source-map' : '',
  plugins: plugins(),
  performance: {
    hints: isProd ? 'warning' : false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders()
      },
      {
        test: /\.less$/,
        use: cssLoaders('less-loader')
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader')
      },
      {
        test: /\.(png|jpe?g|svg|gif|webp|pdf|jp2)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 96
              }
            }
          }
        ]
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      {
        test: /\.csv$/,
        use: ['csv-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-typescript')
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-react')
        }
      }
    ]
  }
};
