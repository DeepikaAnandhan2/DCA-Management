import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, TrendingUp, AlertCircle } from 'lucide-react';
import { StatusBadge } from '@/components/common/StatusBadge';
import { mockCases } from '@/data/mockData';

export const DCADashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 animate-in fade-in duration-500 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">DCA Dashboard</h1>
          <p className="text-sm text-slate-500 font-medium">Overview of your recovery performance</p>
        </div>
      </div>

      {/* SLA PROGRESS SECTION */}
      <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <Clock size={18} className="text-[#FF6600]" /> Overall SLA Compliance
          </h3>
          <span className="text-xs font-black text-orange-600 uppercase tracking-widest">94% Target Achieved</span>
        </div>
        <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
          <div className="bg-[#FF6600] h-full transition-all duration-1000" style={{ width: '94%' }} />
        </div>
      </div>

      {/* ASSIGNED CASES TABLE SECTION */}
      <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-slate-800">Assigned Cases</h3>
            <p className="text-sm text-slate-400 font-medium">Cases requiring your attention</p>
          </div>
          <button 
            onClick={() => navigate('/dca/cases')}
            className="flex items-center gap-2 text-sm font-bold text-[#4D148C] hover:gap-3 transition-all"
          >
            View All <ArrowRight size={18} />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50/50">
              <tr className="text-[10px] uppercase font-black text-slate-400 tracking-widest">
                <th className="px-8 py-4">Case ID</th>
                <th className="px-8 py-4">Customer</th>
                <th className="px-8 py-4">Amount Due</th>
                <th className="px-8 py-4">SLA Due</th>
                <th className="px-8 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {mockCases.slice(0, 2).map((c) => (
                <tr key={c.id} className="group hover:bg-slate-50/50 transition-colors cursor-pointer" onClick={() => navigate(`/dca/cases/${c.id}`)}>
                  <td className="px-8 py-5 font-bold text-[#4D148C]">{c.invoiceId}</td>
                  <td className="px-8 py-5 text-sm font-bold text-slate-700">{c.customerName}</td>
                  <td className="px-8 py-5 font-black text-slate-900">₹{c.amountDue.toLocaleString()}</td>
                  <td className="px-8 py-5 text-sm font-medium text-slate-400">{c.slaDueDate}</td>
                  <td className="px-8 py-5"><StatusBadge status={c.status} /></td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>
      </div>

      {/* BOTTOM KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-sm space-y-2">
          <p className="text-sm font-bold text-slate-800">Due Today</p>
          <p className="text-4xl font-black text-[#FF6600]">3</p>
          <p className="text-xs text-slate-400 font-medium">Cases requiring immediate action</p>
        </div>
        <div className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-sm space-y-2">
          <p className="text-sm font-bold text-slate-800">This Week</p>
          <p className="text-4xl font-black text-[#4D148C]">8</p>
          <p className="text-xs text-slate-400 font-medium">Cases due in next 7 days</p>
        </div>
        <div className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-sm space-y-2">
          <p className="text-sm font-bold text-slate-800">Recovery Rate</p>
          <p className="text-4xl font-black text-emerald-500">72%</p>
          <p className="text-xs text-slate-400 font-medium">This month's performance</p>
        </div>
      </div>
    </div>
  );
};