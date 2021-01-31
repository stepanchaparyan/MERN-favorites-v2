const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const addProduct = async (req, res) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }

  const { name, description, price, countInStock, imageUrl } = req.body;
  
  try {
    const newProduct = new Product({
      // user: req.user.id,
      name,
      description,
      price,
      countInStock,
      imageUrl
    });
    const product = await newProduct.save();
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error');
  }
}

// router.post(
//   '/add',
//   [[check('title', 'Please enter title at least 2 character long').isLength({ min: 2 })]],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { author, title, category, description } = req.body;

//     try {
//       const newFavItem = new FavItem({
//         user: req.user.id,
//         author,
//         title,
//         category,
//         description
//       });
//       const favItem = await newFavItem.save();
//       res.json(favItem);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('server error');
//     }
//   }
// );

module.exports = {
  getProducts,
  getProductById,
  addProduct,
};
