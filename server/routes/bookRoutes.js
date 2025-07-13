const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Create book
router.post('/', async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error adding book.' });
  }
});


// Get all books for user
router.get('/:userId', async (req, res) => {
  //console.log('UserID:', req.params.userId);
  const books = await Book.find({ userId: req.params.userId });
  res.json(books);
});

// Update book (progress, status, rating, review)
router.put('/:id', async (req, res) => {
  const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete book
router.delete('/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
