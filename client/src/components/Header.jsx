import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/login');
  };

  return (
    <header className="bg-secondary text-black p-4">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-bold text-highlight">📚 Book Tracker</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/reviews" className="hover:underline">Reviews</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
          <button
            onClick={handleLogout}
            className="ml-4 bg-highlight text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
          >
            Logout
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-2 space-y-2">
          <Link to="/Home" className="hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/dashboard" className="hover:underline" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link to="/reviews" className="hover:underline" onClick={() => setIsOpen(false)}>Reviews</Link>
          <Link to="/login" className="hover:underline" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/register" className="hover:underline" onClick={() => setIsOpen(false)}>Register</Link>
          <button
            onClick={() => { handleLogout(); setIsOpen(false); }}
            className="bg-highlight text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
