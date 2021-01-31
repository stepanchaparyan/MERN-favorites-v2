const express = require('express');
const asynchHandler = require('express-async-handler');
const Book = require('../models/Book');
const bookRouter = express.Router();

//create a book
bookRouter.post(
  '/',
  asynchHandler(async (req, res) => {
    const { author, title, category } = req.body;

    try {
      const book = await Book.create({
        createdBy: req.user.id,
        author,
        title,
        category,
      });
      res.status(200);
      res.json(book);
    } catch (error) {
      res.status(500);
      throw new Error(error);
    }
  })
);

//get books
bookRouter.get(
  '/',
  asynchHandler(async (req, res) => {
    try {
      const books = await Book.find().sort('createdAt');;
      res.status(201);
      res.json(books);
    } catch (error) {
      res.status(401);
      throw new Error('Server Error');
    }
  })
);

//delete a book
bookRouter.delete(
  '/:id',
  asynchHandler(async (req, res) => {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
      res.status(200);
      res.send(book);
    } catch (error) {
      res.status(500);
      throw new Error('Server Error');
    }
  })
);

//update a book
bookRouter.put(
  '/:id',
  asynchHandler(async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body);
      res.status(200);
      res.json(book);
    } catch (error) {
      res.status(500);
      throw new Error('Update failed');
    }
  })
);

//find a book
bookRouter.get(
  '/:id',
  asynchHandler(async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      res.status(200);
      res.send(book);
    } catch (error) {
      res.status(500);
      throw new Error('No book found');
    }
  })
);

module.exports = bookRouter;
