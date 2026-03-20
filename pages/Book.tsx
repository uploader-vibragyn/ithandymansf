import React, { useState } from 'react';
import { SERVICE_AREAS } from '../constants';

const FORMSPREE_ID = 'mlgpzqeg';

const Book: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again or email us directly.');
      }
    } catch {
      setError('Could not send request. Check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="py-20 text-center px-4">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-2">Request Received</h1>
        <p className="text-zinc-500 mb-8">We will review your details and get back to you within 4 business hours.</p>
        <a href="#/" className="text-zinc-900 font-medium hover:underline">Return Home</a>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-semibold mb-2">Book a Session</h1>
      <p className="text-zinc-500 mb-8">Describe what you need and we will get back to you within 4 business hours.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase text-zinc-400">Full Name</label>
            <input
              required
              name="name"
              type="text"
              className="w-full bg-white border border-zinc-200 px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-900 outline-none"
              placeholder="Jane Doe"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase text-zinc-400">Email</label>
            <input
              required
              name="email"
              type="email"
              className="w-full bg-white border border-zinc-200 px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-900 outline-none"
              placeholder="jane@example.com"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold uppercase text-zinc-400">Phone (optional)</label>
          <input
            name="phone"
            type="tel"
            className="w-full bg-white border border-zinc-200 px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-900 outline-none"
            placeholder="(415) 000-0000"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold uppercase text-zinc-400">Location</label>
          <select
            required
            name="location"
            className="w-full bg-white border border-zinc-200 px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-900 outline-none"
          >
            <option value="">Select your area...</option>
            {SERVICE_AREAS.map(area => <option key={area} value={area}>{area}</option>)}
            <option value="other">Outside Bay Area (Remote Only)</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold uppercase text-zinc-400">What do you need help with?</label>
          <textarea
            required
            name="message"
            rows={4}
            className="w-full bg-white border border-zinc-200 px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-900 outline-none"
            placeholder="Describe your problem or what you want to set up..."
          />
        </div>

        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-zinc-900 text-white py-3 rounded-lg font-medium hover:bg-zinc-800 transition-colors disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Submit Request'}
        </button>

        <p className="text-[10px] text-zinc-400 text-center leading-relaxed">
          We respect your privacy and will never share your contact details.
        </p>
      </form>
    </div>
  );
};

export default Book;
