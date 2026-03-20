import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-2">Core Services</h1>
      <p className="text-zinc-500 mb-12">Remote-first technical solutions for small businesses and independent professionals in the SF Bay Area.</p>

      <div className="grid gap-6">
        {SERVICES.map((service, idx) => (
          <div key={idx} className="bg-white border border-zinc-200 p-8 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-medium text-zinc-900 mb-2">{service.title}</h3>
              <p className="text-zinc-600 leading-relaxed mb-3">{service.description}</p>
              <div className="flex gap-4 text-sm">
                <span className="text-zinc-400">⏱ {service.estimatedHours}</span>
                <span className="font-medium text-zinc-700">{service.priceRange}</span>
              </div>
            </div>
            <div className="bg-zinc-50 px-6 py-4 rounded-lg border border-zinc-100 min-w-[160px] text-center">
              <span className="text-xs text-zinc-400 block uppercase tracking-wider mb-1">Rate</span>
              <span className="text-lg font-bold text-zinc-900">{service.startingAt.split('/')[0]}</span>
              <span className="text-xs text-zinc-500 block">/ hour</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-zinc-900 text-white p-12 rounded-2xl">
        <h2 className="text-2xl font-light mb-4 text-zinc-100">Not sure what you need?</h2>
        <p className="text-zinc-400 mb-8 max-w-xl">Describe your problem to the assistant and get an instant assessment. No forms, no waiting.</p>
        <Link
          to="/"
          className="bg-white text-zinc-900 px-6 py-3 rounded-lg font-medium hover:bg-zinc-100 transition-colors inline-block"
        >
          Talk to Assistant
        </Link>
      </div>
    </div>
  );
};

export default Services;
