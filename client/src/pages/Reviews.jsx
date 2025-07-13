import React, { useEffect, useState } from 'react';
import api from '../api';

export default function Reviews() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchReviewedBooks = async () => {
      try {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const res = await api.get(`/books/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        // Only keep books with rating or review
        const reviewed = res.data.filter(
          (book) => book.rating || book.review
        );
        setBooks(reviewed);
      } catch (err) {
        console.error('Error fetching reviewed books:', err);
      }
    };

    fetchReviewedBooks();
  }, []);

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-highlight">📚 Your Reviews</h2>

      {books.length === 0 ? (
        <p className="text-gray-700">You have not reviewed any books yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div key={book._id} className="p-4 bg-secondary rounded shadow">
              <h3 className="text-xl font-semibold mb-1">{book.title}</h3>
              <p className="text-gray-800 mb-2">by {book.author}</p>
              {book.rating && (
                <p className="text-accent">⭐ Rating: {book.rating}/5</p>
              )}
              {book.review && (
                <p className="text-gray-700 mt-2">{book.review}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
