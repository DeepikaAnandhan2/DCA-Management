import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, MessageSquare, CheckCircle, Check, X } from 'lucide-react';
import { mockCases } from '@/data/mockData';
import { CaseTimeline } from '@/components/common/CaseTimeline';

export const DCACaseDetail: React.FC = () => {
  const { caseId } = useParams();
  const navigate = useNavigate();
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [showPaidSuccess, setShowPaidSuccess] = useState(false);
  const [noteContent, setNoteContent] = useState('');

  const caseData = mockCases.find((c) => c.id === caseId);

  if (!caseData) return <div className="p-10 text-center font-bold">Case not found</div>;

  const handleMarkAsPaid = () => {
    setShowPaidSuccess(true);
    setTimeout(() => setShowPaidSuccess(false), 3000);
  };

  return (
    <div className="p-8 space-y-6 relative min-h-screen">
      {/* SUCCESS NOTIFICATION */}
      {showPaidSuccess && (
        <div className="fixed top-10 right-10 z-[100] bg-emerald-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
          <Check size={20} className="bg-white/20 rounded-full p-1" />
          <p className="font-bold">Payment completed successfully!</p>
        </div>
      )}

      {/* HEADER ACTIONS */}
      <div className="flex justify-between items-center">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-500 font-bold hover:text-[#4D148C] transition-colors">
          <ArrowLeft size={18} /> Back
        </button>
        <div className="flex gap-3">
          <button 
            onClick={() => setShowNotesModal(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-all"
          >
            <MessageSquare size={18} className="text-[#4D148C]" /> Notes
          </button>
          <button 
            onClick={handleMarkAsPaid}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#4D148C] text-white rounded-xl font-bold hover:bg-[#3b0f6e] shadow-lg shadow-purple-100 transition-all"
          >
            <CheckCircle size={18} /> Mark as Paid
          </button>
        </div>
      </div>

      <h1 className="text-4xl font-black text-slate-900">{caseData.invoiceId}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* SLA BREACH TIMELINE */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Clock size={20} className="text-[#FF6600]" />
              <h3 className="font-bold text-slate-800">SLA Breach Timeline</h3>
            </div>
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden mb-2">
              <div className="bg-rose-500 h-full transition-all duration-1000" style={{ width: '85%' }} />
            </div>
            <p className="text-xs font-black text-rose-500 uppercase tracking-widest">Warning: SLA Breach in 2 days</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6">Case Details</h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Customer</p>
                <p className="text-lg font-bold text-slate-900">{caseData.customerName}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Amount Due</p>
                <p className="text-lg font-black text-slate-900">₹{caseData.amountDue.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CASE HISTORY TIMELINE */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6">Case History Timeline</h3>
          <CaseTimeline events={caseData.timeline} />
        </div>
      </div>

      {/* NOTES MODAL */}
      {showNotesModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95">
            <div className="p-6 bg-[#4D148C] text-white flex justify-between items-center">
              <h3 className="font-bold">Add Recovery Note</h3>
              <button onClick={() => setShowNotesModal(false)} className="hover:bg-white/10 p-1 rounded-full"><X size={20}/></button>
            </div>
            <div className="p-8 space-y-4">
              <textarea 
                className="w-full h-40 p-4 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-purple-100 transition-all font-medium text-sm"
                placeholder="Enter latest recovery update notes..."
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
              />
              <button 
                onClick={() => {
                  setShowNotesModal(false);
                  setNoteContent('');
                }}
                className="w-full py-4 bg-[#4D148C] text-white font-bold rounded-2xl hover:bg-[#3b0f6e] transition-all"
              >
                Save Note
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};