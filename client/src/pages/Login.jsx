import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ✅ add useNavigate
import api from '../api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // ✅ hook for redirect

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/users/login', { email, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', res.data.userId);
      setMessage('Login successful! Redirecting...');
      // ✅ Redirect after a short delay (optional)
      setTimeout(() => navigate('/Home'), 1000);
    } catch (err) {
      setMessage('Login failed.');
    }
  };

  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center px-4">
      <div className="bg-secondary p-8 rounded-lg shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-highlight">Login to Book Tracker</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-highlight text-white py-3 rounded hover:bg-opacity-90 transition"
          >
            Login
          </button>
        </form>

        {message && (
          <p className="mt-4 text-sm text-gray-700">{message}</p>
        )}

        <p className="mt-6 text-sm text-gray-700 text-center">
          New user?{' '}
          <Link to="/register" className="text-highlight font-semibold hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </section>
  );
}
