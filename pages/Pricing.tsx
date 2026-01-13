
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className="py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4 text-center">Pricing Policy</h1>
      <p className="text-zinc-500 text-center mb-16 max-w-xl mx-auto">We believe in transparent, value-based pricing. No subscriptions, no fluff—just professional time for professional results.</p>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-lg font-semibold border-b border-zinc-200 pb-2 mb-4">Standard Hourly Rates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-lg border border-zinc-200">
              <span className="text-zinc-400 text-xs uppercase block mb-1">Remote Session</span>
              <span className="text-2xl font-bold">$125 <span className="text-sm font-normal text-zinc-500">/ hr</span></span>
            </div>
            <div className="bg-white p-5 rounded-lg border border-zinc-200">
              <span className="text-zinc-400 text-xs uppercase block mb-1">On-Site (SF Proper)</span>
              <span className="text-2xl font-bold">$175 <span className="text-sm font-normal text-zinc-500">/ hr</span></span>
            </div>
          </div>
          <p className="mt-4 text-sm text-zinc-500 italic">* Minimum 1-hour booking for remote, 2-hour for on-site.</p>
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
                  <td className="px-6 py-4">Small Office Network Setup</td>
                  <td className="px-6 py-4">$450 - $900</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Custom AI Content Workflow</td>
                  <td className="px-6 py-4">$1,200 - $3,500</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Database Migration (up to 50GB)</td>
                  <td className="px-6 py-4">$800 - $2,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
          <h3 className="text-amber-800 font-semibold mb-2 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Service Boundary
          </h3>
          <p className="text-sm text-amber-900/80 leading-relaxed">
            Estimates provided by our AI assistant are preliminary. Final project costs are confirmed after a discovery call or onsite assessment. We do not provide emergency 24/7 on-call services unless previously contracted.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
