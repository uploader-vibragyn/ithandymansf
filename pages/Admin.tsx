
import React, { useState } from 'react';
import { ServiceRequest } from '../types';

const MOCK_REQUESTS: ServiceRequest[] = [
  { id: '1', conversationId: 'conv_1', clientName: 'Alice Johnson', serviceType: 'Networking', status: 'pending', estimatedCost: '$450 - $600', createdAt: '2024-05-20T10:00:00Z' },
  { id: '2', conversationId: 'conv_2', clientName: 'Bob Smith', serviceType: 'AI Automation', status: 'scheduled', estimatedCost: '$1,200', createdAt: '2024-05-19T14:30:00Z' },
  { id: '3', conversationId: 'conv_3', clientName: 'Charlie Brown', serviceType: 'IT Setup', status: 'completed', estimatedCost: '$350', createdAt: '2024-05-18T09:15:00Z' },
];

const Admin: React.FC = () => {
  const [requests, setRequests] = useState(MOCK_REQUESTS);

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto w-full">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">Operator Dashboard</h1>
          <p className="text-sm text-zinc-500">Manage triage leads and ongoing service requests.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-zinc-100 text-zinc-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-200">
            Export Leads
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
          <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold block mb-1">New Leads</span>
          <span className="text-3xl font-bold">12</span>
        </div>
        <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
          <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold block mb-1">Active Jobs</span>
          <span className="text-3xl font-bold">5</span>
        </div>
        <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
          <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold block mb-1">Revenue (M)</span>
          <span className="text-3xl font-bold">$4.2k</span>
        </div>
        <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
          <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold block mb-1">Success Rate</span>
          <span className="text-3xl font-bold">98%</span>
        </div>
      </div>

      <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-zinc-100 bg-zinc-50/50 flex justify-between items-center">
          <h3 className="font-semibold text-zinc-800">Inbound Service Requests</h3>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-zinc-200 text-zinc-600 text-[10px] rounded uppercase font-bold">SF Area</span>
          </div>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="text-xs font-semibold text-zinc-400 uppercase tracking-wider border-b border-zinc-100">
              <th className="px-6 py-4">Client</th>
              <th className="px-6 py-4">Service</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Estimate</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 text-sm">
            {requests.map((req) => (
              <tr key={req.id} className="hover:bg-zinc-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-zinc-900">{req.clientName}</div>
                  <div className="text-xs text-zinc-500">{new Date(req.createdAt).toLocaleDateString()}</div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-zinc-100 text-zinc-600 rounded text-xs">{req.serviceType}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                    req.status === 'pending' ? 'bg-amber-100 text-amber-700' : 
                    req.status === 'scheduled' ? 'bg-blue-100 text-blue-700' : 
                    'bg-emerald-100 text-emerald-700'
                  }`}>
                    {req.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right font-medium">{req.estimatedCost}</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-zinc-400 hover:text-zinc-900 transition-colors px-2">
                    View Logs
                  </button>
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium px-2">
                    Schedule
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
