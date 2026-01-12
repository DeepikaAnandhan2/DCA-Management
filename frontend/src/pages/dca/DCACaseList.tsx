import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Eye, 
  Edit3, 
  CheckCircle, 
  X, 
  Check,
  ChevronDown
} from 'lucide-react';
import { StatusBadge } from '@/components/common/StatusBadge';
import { mockCases } from '@/data/mockData';
import { Case } from '@/types';

export const DCACaseList: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'ASSIGNED' | 'CLOSED'>('ALL');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  
  // Modal & Notification States
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showPaidSuccess, setShowPaidSuccess] = useState(false);
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);

  // Filter Logic
  const filteredCases = mockCases.filter(c => {
    const matchesSearch = c.invoiceId.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         c.customerName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleMarkAsPaid = (c: Case) => {
    setShowPaidSuccess(true);
    setTimeout(() => setShowPaidSuccess(false), 3000);
  };

  return (
    <div className="p-8 space-y-6 relative min-h-screen bg-[#F8FAFC]">
      {/* Success Notification */}
      {showPaidSuccess && (
        <div className="fixed top-10 right-10 z-[100] bg-emerald-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
          <Check size={20} className="bg-white/20 rounded-full p-1" />
          <p className="font-bold text-sm">Payment completed successfully!</p>
        </div>
      )}

      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Assigned Cases</h1>
        <p className="text-sm text-slate-500 font-medium">Manage and update your assigned collection cases</p>
      </div>
      
      {/* Search & Filter Bar */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by Case ID or Customer..." 
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-purple-100 transition-all font-medium"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Status Filter Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-100 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition-colors min-w-[140px] justify-between"
          >
            <div className="flex items-center gap-2">
              <Filter size={18} /> 
              <span>{statusFilter === 'ALL' ? 'All Status' : statusFilter}</span>
            </div>
            <ChevronDown size={16} className={showFilterDropdown ? "rotate-180 transition-transform" : "transition-transform"} />
          </button>

          {showFilterDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-xl z-50 py-2 animate-in fade-in zoom-in-95">
              <button onClick={() => { setStatusFilter('ALL'); setShowFilterDropdown(false); }} className="w-full text-left px-4 py-2 text-sm font-bold hover:bg-slate-50 text-slate-700">All Status</button>
              <button onClick={() => { setStatusFilter('ASSIGNED'); setShowFilterDropdown(false); }} className="w-full text-left px-4 py-2 text-sm font-bold hover:bg-slate-50 text-slate-700">Assigned</button>
              <button onClick={() => { setStatusFilter('CLOSED'); setShowFilterDropdown(false); }} className="w-full text-left px-4 py-2 text-sm font-bold hover:bg-slate-50 text-slate-700">Closed</button>
            </div>
          )}
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-[24px] border border-slate-100 overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-50/50 border-b border-slate-100">
            <tr className="text-[10px] uppercase font-black text-slate-400 tracking-widest">
              <th className="px-8 py-5">Case ID</th>
              <th className="px-8 py-5">Customer Name</th>
              <th className="px-8 py-5">Amount Due</th>
              <th className="px-8 py-5">SLA Due Date</th>
              <th className="px-8 py-5">Status</th>
              <th className="px-8 py-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filteredCases.map((c) => (
              <tr key={c.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-8 py-6 font-bold text-[#4D148C]">{c.invoiceId}</td>
                <td className="px-8 py-6 text-sm font-bold text-slate-800">{c.customerName}</td>
                <td className="px-8 py-6 font-black text-slate-900">₹{c.amountDue.toLocaleString()}</td>
                <td className="px-8 py-6 text-sm font-medium text-slate-400">{c.slaDueDate}</td>
                <td className="px-8 py-6"><StatusBadge status={c.status} /></td>
                <td className="px-8 py-6 text-right">
                  <div className="relative inline-block group/menu">
                    <button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 transition-all">
                      <MoreVertical size={18} className="text-slate-300" />
                    </button>
                    <div className="hidden group-hover/menu:block absolute right-0 top-full w-52 bg-white border border-slate-100 rounded-2xl shadow-2xl z-50 py-2 animate-in fade-in slide-in-from-top-2">
                      <button onClick={() => navigate(`/dca/cases/${c.id}`)} className="w-full text-left px-4 py-2.5 text-sm font-bold flex items-center gap-3 hover:bg-purple-50 text-slate-700 hover:text-[#4D148C]">
                        <Eye size={16} /> View Details
                      </button>
                      <button onClick={() => { setSelectedCase(c); setShowUpdateModal(true); }} className="w-full text-left px-4 py-2.5 text-sm font-bold flex items-center gap-3 hover:bg-purple-50 text-slate-700 hover:text-[#4D148C]">
                        <Edit3 size={16} /> Update Status
                      </button>
                      <div className="h-px bg-slate-100 my-1 mx-2" />
                      <button onClick={() => handleMarkAsPaid(c)} className="w-full text-left px-4 py-2.5 text-sm font-bold flex items-center gap-3 hover:bg-emerald-50 text-emerald-600">
                        <CheckCircle size={16} /> Mark as Paid
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* UPDATE STATUS MODAL */}
      {showUpdateModal && selectedCase && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95">
            <div className="p-6 bg-[#4D148C] text-white flex justify-between items-center">
              <h3 className="font-bold">Update Recovery Status</h3>
              <button onClick={() => setShowUpdateModal(false)}><X size={20} /></button>
            </div>
            <div className="p-8 space-y-4">
              <select className="w-full p-4 border rounded-xl font-bold text-slate-700 bg-slate-50 outline-none">
                <option>ASSIGNED</option>
                <option>IN PROGRESS</option>
                <option>CLOSED</option>
              </select>
              <textarea className="w-full h-32 p-4 border rounded-xl text-sm font-medium outline-none" placeholder="Add recovery notes..." />
              <button onClick={() => setShowUpdateModal(false)} className="w-full py-4 bg-[#4D148C] text-white font-bold rounded-2xl hover:bg-[#3b0f6e] transition-all">
                Save Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};