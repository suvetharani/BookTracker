import React, { useEffect, useState } from 'react';
import api from '../api';
import BookTrackerCard from '../components/BookTrackerCard';
import { X } from 'lucide-react';

export default function Dashboard() {
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const res = await api.get(`/books/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBooks(res.data);
    };
    fetchBooks();
  }, []);

  // Example handler to update a book's status or add a review
  const handleUpdate = async (bookId, data) => {
    const token = localStorage.getItem('token');
    try {
      await api.put(`/books/${bookId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage('Book updated successfully!');
    } catch (err) {
      setMessage('Error updating book.');
    }
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-highlight">Your Library</h2>

      <h3 className="text-xl mb-2 text-accent">📚 To Read</h3>
      <div className="grid gap-4 mb-6">
        {books.filter(b => b.status === 'To Read').map(book => (
          <BookTrackerCard
            key={book._id}
            book={book}
            onUpdate={handleUpdate}
          />
        ))}
      </div>

      <h3 className="text-xl mb-2 text-accent">📖 Reading</h3>
      <div className="grid gap-4 mb-6">
        {books.filter(b => b.status === 'Reading').map(book => (
          <BookTrackerCard
            key={book._id}
            book={book}
            onUpdate={handleUpdate}
          />
        ))}
      </div>

      <h3 className="text-xl mb-2 text-accent">✅ Completed</h3>
      <div className="grid gap-4">
        {books.filter(b => b.status === 'Completed').map(book => (
          <BookTrackerCard
            key={book._id}
            book={book}
            onUpdate={handleUpdate}
          />
        ))}
      </div>

      {/* ✅ Centered Modal for messages */}
      {message && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-primary rounded-lg p-6 relative max-w-xs w-full shadow-lg">
            <button
              onClick={() => setMessage('')}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              <X size={20} />
            </button>
            <p className="text-gray-800">{message}</p>
          </div>
        </div>
      )}
    </section>
  );
}
