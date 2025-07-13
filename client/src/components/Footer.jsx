import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-center p-4 mt-auto">
      <p className="text-sm">&copy; {new Date().getFullYear()} Book Tracker</p>
    </footer>
  );
}
