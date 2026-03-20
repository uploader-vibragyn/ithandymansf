import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-20 px-4 max-w-2xl mx-auto">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Practical IT for Practical People.</h1>
        <p className="text-lg text-zinc-600 leading-relaxed mb-6">
          IT Handyman SF exists because most small businesses in the Bay Area are stuck between two bad options: large MSPs that are too expensive, and gig apps that are too unreliable.
        </p>
        <p className="text-lg text-zinc-600 leading-relaxed mb-6">
          We do the technical work you do not want to deal with — fixing broken systems, setting up AI tools that actually save time, and making sure your online presence works properly.
        </p>
        <p className="text-lg text-zinc-600 leading-relaxed">
          No hype, no jargon. Just someone who shows up, understands the problem, and fixes it.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-zinc-200 pt-12">
        <div>
          <h3 className="font-bold text-zinc-900 mb-2">How We Work</h3>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Remote-first. Most problems are solved without a visit. When an in-person meeting makes sense, we come to you anywhere in the SF Bay Area.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-zinc-900 mb-2">Our Promise</h3>
          <p className="text-zinc-600 text-sm leading-relaxed">
            If we cannot fix it, we will not charge you for the troubleshooting. We believe in building long-term trust with our clients.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-zinc-900 mb-2">Service Area</h3>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Based in San Francisco. We serve the entire Bay Area — Peninsula, East Bay, and Marin. Remote clients welcome from anywhere.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-zinc-900 mb-2">Response Time</h3>
          <p className="text-zinc-600 text-sm leading-relaxed">
            We respond to all requests within 4 business hours. Urgent issues are assessed the same day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
