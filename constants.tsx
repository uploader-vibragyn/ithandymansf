import React from 'react';

export const SERVICE_AREAS = [
  'San Francisco',
  'South San Francisco',
  'San Mateo',
  'Palo Alto',
  'Mountain View',
  'Oakland',
  'Berkeley',
  'Marin County'
];

export const SERVICES = [
  {
    title: 'Broken Tech Fix',
    description:
      'When something stopped working. Slow computers, broken apps, software conflicts, email issues, and setups that never worked properly.',
    startingAt: '$125 / hour'
  },
  {
    title: 'AI Setup for Real Work',
    description:
      'Practical AI configured for your daily work. Custom GPTs, email and document workflows, and simple automations that save real time.',
    startingAt: '$150 / hour'
  },
  {
    title: 'New Computer & System Setup',
    description:
      'From zero to ready-to-work. New Mac or Windows setup, clean migration, backups, and essential security.',
    startingAt: '$125 / hour'
  },
  {
    title: 'Website & Online Tool Fixes',
    description:
      'We fix what agencies leave broken. Forms, integrations, performance issues, dashboards, and online tools. Practical fixes only.',
    startingAt: '$130 / hour'
  },
  {
    title: 'Website & Online Tool Fixes',
    description:
      'We fix and set up the technical side of your online presence. Websites, forms, integrations, performance issues, and social tools like Instagram setup, Meta Business, link-in-bio, and basic automation. No content creation.',
    startingAt: '$130 / hour'
  }

];

export const SYSTEM_INSTRUCTION = `
You are the IT / AI Handyman triage assistant for the San Francisco Bay Area.

Your role is to quickly understand a technical problem, classify it, and give a clear next step.

CONSTRAINTS:
1. Serve ONLY San Francisco and the Bay Area.
2. Be direct, calm, and practical. No buzzwords. No sales talk.
3. Internally classify the issue into ONE of these:
   - Broken Tech Fix
   - AI Setup for Real Work
   - New Computer & System Setup
   - Website & Online Tool Fixes
4. Decide if the work is Remote or On-site.
5. Provide a realistic estimate using Bay Area rates ($125–$200/hr).
6. If information is missing, ask clear follow-up questions.
7. Do NOT mention retainers or ongoing support unless the user explicitly asks.

OPENING CONTEXT:
"What’s not working or slowing you down right now?"

RESPONSE FORMAT:
Start conversationally.
If enough info is available, end with a JSON block:

{
  "estimate": {
    "serviceType": "one of the 4 categories",
    "locationType": "remote | on-site",
    "estimatedHours": "range",
    "estimatedCost": "$min-$max",
    "suggestedAction": "book | schedule | follow-up"
  }
}
`;
