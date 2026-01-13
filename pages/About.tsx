
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-20 px-4 max-w-2xl mx-auto">
      <div className="mb-12">
        <img 
          src="https://picsum.photos/seed/handyman/800/400" 
          alt="San Francisco Office" 
          className="w-full h-64 object-cover rounded-2xl mb-8 border border-zinc-200"
        />
        <h1 className="text-3xl font-bold mb-4">Practical IT for Practical People.</h1>
        <p className="text-lg text-zinc-600 leading-relaxed mb-6">
          We started IT Handyman SF because we saw a gap in the Bay Area market. Large MSPs are too expensive for creators and small shops, and gig-economy apps are too unreliable for critical business infrastructure.
        </p>
        <p className="text-lg text-zinc-600 leading-relaxed">
          We provide concierge-style technical support that bridges the gap between old-school hardware repair and modern AI automation. No hype, just solutions that work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-zinc-200 pt-12">
        <div>
          <h3 className="font-bold text-zinc-900 mb-2">Service Area</h3>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Headquartered in the Mission District. We serve all of San Francisco, the Peninsula down to Menlo Park, and parts of the East Bay.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-zinc-900 mb-2">Our Promise</h3>
          <p className="text-zinc-600 text-sm leading-relaxed">
            If we can't fix it, we won't charge you for the troubleshooting. We believe in building long-term trust with our neighbors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
