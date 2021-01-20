const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const app = express();
const path = require('path');
const auth = require('./middleware/auth');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
};

app.use(cors());

//connet to mongoDB
const connectDB = require('./mongoConfig/mongoDB');
connectDB();

app.use(fileUpload());
app.use(express.json({ extended: true }));

// API routes
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/favItem', auth, require('./routes/favItem'));
app.use('/profile', auth, require('./routes/profile'));
app.use('/upload', require('./routes/upload'));
app.use('/api/books', auth, require('./routes/books'));

// use static files
app.use('/', express.static(path.join('..', 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve('..', 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started at port ${PORT}`));
