import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50">
      <header className="border-b border-zinc-200 bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="font-bold text-lg tracking-tight flex items-center gap-2">
            <span className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center rounded text-sm">
              H
            </span>
            <span>
              IT Handyman <span className="text-zinc-400 font-normal">SF</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-600">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`hover:text-zinc-900 transition-colors ${location.pathname === to ? 'text-zinc-900' : ''}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Book Now — always visible */}
            <Link
              to="/book"
              onClick={closeMenu}
              className="bg-zinc-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-zinc-800 transition-colors"
            >
              Book Now
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-zinc-900 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-zinc-900 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-zinc-900 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-zinc-100 bg-white px-4 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={closeMenu}
                className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto flex flex-col">
        {children}
      </main>

      <footer className="border-t border-zinc-200 py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} IT Handyman SF. Serving San Francisco & Bay Area.</p>
          <div className="flex gap-4">
            {NAV_LINKS.map(({ to, label }) => (
              <Link key={to} to={to} className="hover:underline">{label}</Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
