const express = require('express');
const router = express.Router();
const path = require('path');

router.post('/', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }
  const file = req.files.file;

  file.mv(path.join(__dirname, `../src/assets/${file.name}`), (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/${file.name}` });
  });
});

module.exports = router;
