import React, { useState } from 'react';
import api from '../api';
import { X } from 'lucide-react';

export default function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [totalPages, setTotalPages] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    try {
      await api.post(
        '/books',
        { title, author, totalPages, userId, status: 'To Read' },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('Book added successfully!');
      setTitle('');
      setAuthor('');
      setTotalPages('');
    } catch (err) {
      setMessage('Error adding book.');
    }
  };

  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center px-4 relative">
      <div className="bg-secondary p-8 rounded-lg shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-highlight">Add a New Book</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            className="w-full p-3 border border-gray-300 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Author"
            className="w-full p-3 border border-gray-300 rounded"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="number"
            placeholder="Total Pages"
            className="w-full p-3 border border-gray-300 rounded"
            value={totalPages}
            onChange={(e) => setTotalPages(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-highlight text-white py-3 rounded hover:bg-opacity-90 transition"
          >
            Add Book
          </button>
        </form>
      </div>

      {/* Centered Modal */}
      {message && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-primary rounded-lg p-6 relative max-w-sm w-full shadow-lg">
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
