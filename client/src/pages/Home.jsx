import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="bg-primary min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-highlight">
        Welcome to Book Tracker 📚
      </h2>
      <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-8">
        Organize your reading list, track your progress, and share your thoughts.
        Stay motivated and never lose track of your next read!
      </p>

      <div className="flex space-x-4">
        <Link
          to="/register"
          className="bg-highlight text-white px-6 py-3 rounded hover:bg-opacity-90 transition"
        >
          Get Started
        </Link>
        <Link
          to="/login"
          className="border-2 border-highlight text-highlight px-6 py-3 rounded hover:bg-highlight hover:text-white transition"
        >
          Login
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        <Link to="/add-book" className="p-6 bg-secondary rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2 text-accent">📖 Create Lists</h3>
          <p className="text-gray-700">Add books to your to-read, currently reading, or completed lists.</p>
        </Link>

        <Link to="/dashboard" className="p-6 bg-secondary rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2 text-accent">📊 Track Progress</h3>
          <p className="text-gray-700">Update reading status, pages read, and set reading goals.</p>
        </Link>

        <Link to="/reviews" className="p-6 bg-secondary rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2 text-accent">⭐ Rate & Review</h3>
          <p className="text-gray-700">Leave ratings and personal notes to remember your thoughts.</p>
        </Link>
      </div>
    </section>
  );
}
