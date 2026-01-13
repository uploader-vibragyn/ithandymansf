import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50">
      <header className="border-b border-zinc-200 bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="font-bold text-lg tracking-tight flex items-center gap-2"
          >
            <span className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center rounded text-sm">
              H
            </span>
            <span>
              IT Handyman <span className="text-zinc-400 font-normal">SF</span>
            </span>
          </Link>

          <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-600">
            <Link to="/services" className="hover:text-zinc-900 transition-colors">
              Services
            </Link>
            <Link to="/pricing" className="hover:text-zinc-900 transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="hover:text-zinc-900 transition-colors">
              About
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/book"
              className="bg-zinc-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-zinc-800 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto flex flex-col">
        {children}
      </main>

      <footer className="border-t border-zinc-200 py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>© 2024 IT Handyman SF. Serving San Francisco & Bay Area.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Liability Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
