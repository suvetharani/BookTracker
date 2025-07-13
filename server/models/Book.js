const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  author: String,
  status: { type: String, enum: ['To Read', 'Reading', 'Completed'], default: 'To Read' },
  currentPage: { type: Number, default: 0 },
  totalPages: { type: Number, default: 0 },
  rating: { type: Number, min: 1, max: 5 },
  review: String,
});

module.exports = mongoose.model('Book', bookSchema);
