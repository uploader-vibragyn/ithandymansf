import React from 'react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <div className="py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4 text-center">Pricing</h1>
      <p className="text-zinc-500 text-center mb-16 max-w-xl mx-auto">Transparent, hourly rates. No subscriptions, no hidden fees — just professional time for professional results.</p>

      <div className="space-y-12">
        <section>
          <h2 className="text-lg font-semibold border-b border-zinc-200 pb-2 mb-4">Hourly Rates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-lg border border-zinc-200">
              <span className="text-zinc-400 text-xs uppercase block mb-1">Remote Session</span>
              <span className="text-2xl font-bold">$125 <span className="text-sm font-normal text-zinc-500">/ hr</span></span>
              <p className="text-xs text-zinc-400 mt-2">Minimum 1-hour booking</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-zinc-200">
              <span className="text-zinc-400 text-xs uppercase block mb-1">AI, Email & Chat Automation</span>
              <span className="text-2xl font-bold">$150 <span className="text-sm font-normal text-zinc-500">/ hr</span></span>
              <p className="text-xs text-zinc-400 mt-2">Minimum 1-hour booking</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold border-b border-zinc-200 pb-2 mb-4">Flat Fee Projects</h2>
          <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-50 border-b border-zinc-200">
                <tr>
                  <th className="px-6 py-3 font-medium text-zinc-500">Scope</th>
                  <th className="px-6 py-3 font-medium text-zinc-500">Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-6 py-4">Custom AI Workflow (n8n, GPT)</td>
                  <td className="px-6 py-4">$500 - $2,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Email & Chat Automation Setup</td>
                  <td className="px-6 py-4">$600 - $2,500</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Social Media Automation (Instagram, TikTok, etc.)</td>
                  <td className="px-6 py-4">$450 - $1,200</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Website Fix & Integration</td>
                  <td className="px-6 py-4">$300 - $1,200</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Broken Tech Fix (one-time session)</td>
                  <td className="px-6 py-4">$125 - $375</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold border-b border-zinc-200 pb-2 mb-4">Ongoing Support</h2>
          <div className="bg-white p-6 rounded-xl border border-zinc-200">
            <p className="text-zinc-600 text-sm leading-relaxed mb-2">
              For small teams that need recurring tech help, we offer a light retainer — a fixed number of hours per month at a discounted rate.
            </p>
            <p className="text-zinc-500 text-sm">Contact us to discuss a custom arrangement.</p>
          </div>
        </section>

        <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
          <h3 className="text-amber-800 font-semibold mb-2">Note on Estimates</h3>
          <p className="text-sm text-amber-900/80 leading-relaxed">
            The AI assistant provides preliminary estimates. Final project costs are confirmed after an initial conversation. We do not bill for time spent assessing whether we can help.
          </p>
        </div>

        <div className="text-center">
          <Link
            to="/book"
            className="bg-zinc-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-zinc-800 transition-colors inline-block"
          >
            Book a Session
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
