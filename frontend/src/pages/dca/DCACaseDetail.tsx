import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  MessageSquare,
  CheckCircle,
  Check,
  X
} from "lucide-react";

//Integrating backend API cases list
import { CaseTimeline } from "@/components/common/CaseTimeline";
import {
  getCaseDetail,
  getCaseHistory,
  markCasePaid,
  addCaseNote
} from "@/api/cases";

export const DCACaseDetail = () => {
  const { caseId } = useParams();
  const navigate = useNavigate();

  const [caseData, setCaseData] = useState(null);
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showNotesModal, setShowNotesModal] = useState(false);
  const [showPaidSuccess, setShowPaidSuccess] = useState(false);
  const [noteContent, setNoteContent] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const [caseRes, historyRes] = await Promise.all([
          getCaseDetail(caseId),
          getCaseHistory(caseId)
        ]);

        setCaseData(caseRes);
        setTimeline(historyRes);
      } catch (err) {
        alert(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [caseId]);

  const handleMarkAsPaid = async () => {
    try {
      await markCasePaid(caseId);
      setShowPaidSuccess(true);

      setTimeout(() => setShowPaidSuccess(false), 3000);

      setCaseData({ ...caseData, status: "PAID" });
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSaveNote = async () => {
    try {
      await addCaseNote(caseId, noteContent);
      setNoteContent("");
      setShowNotesModal(false);

      const updatedHistory = await getCaseHistory(caseId);
      setTimeline(updatedHistory);
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <div className="p-10 font-bold">Loading...</div>;
  if (!caseData) return <div className="p-10 font-bold">Case not found</div>;

  return (
    <div className="p-8 space-y-6 relative min-h-screen">
      {showPaidSuccess && (
        <div className="fixed top-10 right-10 bg-emerald-600 text-white px-6 py-4 rounded-xl flex items-center gap-3">
          <Check size={20} /> Payment completed successfully!
        </div>
      )}

      <div className="flex justify-between items-center">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 font-bold text-slate-500"
        >
          <ArrowLeft size={18} /> Back
        </button>

        <div className="flex gap-3">
          <button
            onClick={() => setShowNotesModal(true)}
            className="px-5 py-2.5 bg-white border rounded-xl font-bold"
          >
            <MessageSquare size={18} /> Notes
          </button>

          {caseData.status === "ASSIGNED" && (
            <button
              onClick={handleMarkAsPaid}
              className="px-5 py-2.5 bg-[#4D148C] text-white rounded-xl font-bold"
            >
              <CheckCircle size={18} /> Mark as Paid
            </button>
          )}
        </div>
      </div>

      <h1 className="text-4xl font-black">{caseData.invoice_id}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-3xl border">
            <div className="flex items-center gap-2 mb-4">
              <Clock size={20} className="text-orange-500" />
              <h3 className="font-bold">SLA Status</h3>
            </div>
            <p className="font-bold text-sm">
              SLA Due: {new Date(caseData.sla_due_at).toLocaleString()}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border">
            <h3 className="font-bold mb-6">Case Details</h3>
            <p><b>Customer:</b> {caseData.customer_name}</p>
            <p><b>Amount Due:</b> ₹{caseData.amount_due}</p>
            <p><b>Status:</b> {caseData.status}</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border">
          <h3 className="font-bold mb-6">Case History</h3>
          <CaseTimeline events={timeline} />
        </div>
      </div>

      {showNotesModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white w-full max-w-md rounded-3xl">
            <div className="p-6 bg-[#4D148C] text-white flex justify-between">
              <h3>Add Recovery Note</h3>
              <button onClick={() => setShowNotesModal(false)}>
                <X />
              </button>
            </div>
            <div className="p-6">
              <textarea
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                className="w-full h-40 border rounded-xl p-4"
              />
              <button
                onClick={handleSaveNote}
                className="w-full mt-4 bg-[#4D148C] text-white py-3 rounded-xl font-bold"
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
