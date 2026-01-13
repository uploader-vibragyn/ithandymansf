
import React from 'react';
import Assistant from '../components/Assistant';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 md:py-10 px-4 max-w-4xl mx-auto w-full">
      <div className="text-center mb-6">
        <h1 className="text-xl md:text-2xl font-light text-zinc-800 mb-1">How can we help today?</h1>
        <p className="text-xs md:text-sm text-zinc-400 uppercase tracking-widest font-medium">SF & Bay Area Concierge IT</p>
      </div>
      
      <div className="w-full max-w-xl mx-auto mb-10">
        <Assistant />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
          <h3 className="text-[13px] font-semibold text-zinc-900 mb-1.5">Broken Tech Fix</h3>
          <p className="text-[11px] text-zinc-500 leading-relaxed">Fast resolution for slow systems, software conflicts, and broken hardware setups.</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
          <h3 className="text-[13px] font-semibold text-zinc-900 mb-1.5">AI Implementation</h3>
          <p className="text-[11px] text-zinc-500 leading-relaxed">Deploy custom GPTs and practical automations that save your team actual time.</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
          <h3 className="text-[13px] font-semibold text-zinc-900 mb-1.5">Office & Wi-Fi</h3>
          <p className="text-[11px] text-zinc-500 leading-relaxed">Reliable mesh networking and device configuration for productive workspaces.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
