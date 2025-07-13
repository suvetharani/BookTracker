import React from 'react';

export default function BookCard({ book }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md p-4 transition">
      <h3 className="text-lg font-bold mb-2">{book.title}</h3>
      <p className="text-sm text-gray-600 mb-1">Author: {book.author}</p>
      <p className="text-sm text-gray-600 mb-1">Status: {book.status}</p>
      <p className="text-sm text-gray-600">Rating: {book.rating ?? 'N/A'}</p>
    </div>
  );
}
