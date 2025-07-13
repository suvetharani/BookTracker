import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ✅ Add useNavigate
import api from '../api';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // ✅ Create navigate instance

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/users/register', { username, email, password });
      setMessage('Registration successful! Redirecting to login...');
      setTimeout(() => navigate('/login'), 1000); // ✅ redirect after 1 second
    } catch (err) {
      setMessage('Registration failed.');
    }
  };

  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center px-4">
      <div className="bg-secondary p-8 rounded-lg shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-highlight">Create Your Account</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 border border-gray-300 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
            Register
          </button>
        </form>

        {message && (
          <p className="mt-4 text-sm text-gray-700">{message}</p>
        )}

        <p className="mt-6 text-sm text-gray-700 text-center">
          Already a user?{' '}
          <Link to="/login" className="text-highlight font-semibold hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </section>
  );
}
