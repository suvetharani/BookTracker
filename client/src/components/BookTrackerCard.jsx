import React, { useState } from 'react';

export default function BookTrackerCard({ book, onUpdate }) {
  const [status, setStatus] = useState(book.status);
  const [currentPage, setCurrentPage] = useState(book.currentPage || 0);
  const [rating, setRating] = useState(book.rating || '');
  const [review, setReview] = useState(book.review || '');

  const updateBook = async () => {
    await onUpdate(book._id, {
      status,
      currentPage,
      rating,
      review,
    });
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h4 className="text-lg font-bold">{book.title}</h4>
      <p className="text-sm text-gray-600">By {book.author}</p>
      <div className="my-2">
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="ml-2">
          <option>To Read</option>
          <option>Reading</option>
          <option>Completed</option>
        </select>
      </div>
      {status === 'Reading' && (
        <div className="my-2">
          <label>Current Page:</label>
          <input
            type="number"
            value={currentPage}
            onChange={(e) => setCurrentPage(e.target.value)}
            className="ml-2 border p-1 rounded w-16"
          /> / {book.totalPages}
        </div>
      )}
      {status === 'Completed' && (
        <>
          <div className="my-2">
            <label>Rating:</label>
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="ml-2 border p-1 rounded w-16"
            />
          </div>
          <div className="my-2">
            <label>Review:</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="ml-2 border p-1 rounded w-full"
            />
          </div>
        </>
      )}
      <button
        onClick={updateBook}
        className="mt-2 px-4 py-2 bg-highlight text-white rounded"
      >
        Save Changes
      </button>
    </div>
  );
}
