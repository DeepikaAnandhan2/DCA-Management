import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Clock, Loader2 } from 'lucide-react';
import { StatusBadge } from '@/components/common/StatusBadge';
import { getCases } from '@/api/cases';

export const DCADashboard: React.FC = () => {
  const navigate = useNavigate();
  const [cases, setCases] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCases = async () => {
      try {
        const data = await getCases();
        setCases(data);
      } catch (err) {
        console.error("Failed to load cases", err);
      } finally {
        setLoading(false);
      }
    };
    loadCases();
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-500 p-6">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
          DCA Dashboard
        </h1>
        <p className="text-sm text-slate-500 font-medium">
          Overview of your recovery performance
        </p>
      </div>

      {/* SLA SECTION */}
      <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <Clock size={18} className="text-[#FF6600]" />
            Overall SLA Compliance
          </h3>
          <span className="text-xs font-black text-orange-600">LIVE DATA</span>
        </div>
        <div className="w-full bg-slate-100 h-3 rounded-full">
          <div className="bg-[#FF6600] h-full w-[90%] rounded-full" />
        </div>
      </div>

      {/* ASSIGNED CASES */}
      <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">Assigned Cases</h3>
            <p className="text-sm text-slate-400">Cases requiring your attention</p>
          </div>
          <button
            onClick={() => navigate('/dca/cases')}
            className="flex items-center gap-2 text-sm font-bold text-[#4D148C] hover:underline"
          >
            View All <ArrowRight size={18} />
          </button>
        </div>

        {loading ? (
          <div className="p-12 flex flex-col items-center justify-center text-slate-400 gap-2">
            <Loader2 className="animate-spin" />
            <p className="text-sm">Loading recovery data...</p>
          </div>
        ) : cases.length === 0 ? (
          <div className="p-12 text-center text-slate-400">
            <p className="text-sm">No cases currently assigned to you.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr className="text-[10px] uppercase font-black text-slate-400 text-left">
                  <th className="px-8 py-4">Case ID</th>
                  <th className="px-8 py-4">Customer</th>
                  <th className="px-8 py-4">Amount Due</th>
                  <th className="px-8 py-4">SLA Due</th>
                  <th className="px-8 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {cases.slice(0, 5).map((c) => (
                  <tr
                    key={c.id}
                    onClick={() => navigate(`/dca/cases/${c.id}`)}
                    className="cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-8 py-5 font-bold text-[#4D148C]">
                      #{c.id}
                    </td>
                    <td className="px-8 py-5 font-bold">
                      {c.customer_name || 'Generic Customer'}
                    </td>
                    <td className="px-8 py-5 font-black text-slate-700">
                      ₹{c.amount_due?.toLocaleString() || '0.00'}
                    </td>
                    <td className="px-8 py-5 text-sm text-slate-400">
                      {c.sla_due_at 
                        ? new Date(c.sla_due_at).toLocaleDateString('en-IN') 
                        : 'No Date'}
                    </td>
                    <td className="px-8 py-5">
                      <StatusBadge status={c.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};