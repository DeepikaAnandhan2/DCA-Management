import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Box, Briefcase, Building2, ArrowRight, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type Role = "fedex" | "dca";

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    if (!email || !selectedRole) {
      alert("Please enter your email and select a role");
      return;
    }

    try {
      setLoading(true);
      // Calls the login function from AuthContext
      await login(email, selectedRole);
      // Navigates based on the selected role
      navigate(selectedRole === 'dca' ? '/dca' : '/fedex');
    } catch (err: any) {
      alert(err.message || "Login failed. Please check your credentials.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">
      {/* LEFT SIDE: Branding & Stats */}
      <div className="w-full md:w-[45%] bg-[#4D148C] p-8 md:p-16 flex flex-col justify-center text-white relative overflow-hidden">
        {/* Decorative Circles Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="grid grid-cols-6 gap-8 p-4">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="w-12 h-12 border-2 border-white rounded-full" />
            ))}
          </div>
        </div>

        <div className="relative z-10 space-y-8 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="bg-[#FF6600] p-4 rounded-3xl shadow-2xl inline-block">
            <Box size={48} className="text-white" strokeWidth={2.5} />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">FedEx DCA</h1>
            <p className="text-xl md:text-2xl font-bold text-white/90">Case Management System</p>
          </div>

          <p className="text-lg text-white/70 max-w-md leading-relaxed">
            Streamlined debt collection management powered by AI prioritization and intelligent workflow automation.
          </p>

          <div className="grid grid-cols-3 gap-8 pt-8 w-full max-w-md">
            <div className="text-center">
              <p className="text-2xl font-black text-[#FF6600]">156</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-white/50">Active Cases</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-black text-[#FF6600]">94%</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-white/50">SLA Compliance</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-black text-[#FF6600]">₹12.4L</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-white/50">Recovered</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Selection Login */}
      <div className="flex-1 bg-white p-8 md:p-16 flex flex-col justify-center items-center">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black text-slate-900">Welcome Back</h2>
            <p className="text-slate-400 font-medium">Enter details and select your role</p>
          </div>

          <div className="space-y-4">
            {/* Email Input Integration */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-slate-100 outline-none focus:border-[#4D148C] transition-all text-slate-900 font-medium"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              {/* FedEx Role Option */}
              <button
                onClick={() => setSelectedRole('fedex')}
                className={cn(
                  "w-full flex items-center justify-between p-5 rounded-[24px] border-2 transition-all duration-300 text-left",
                  selectedRole === 'fedex' 
                    ? "border-[#4D148C] bg-purple-50/50 ring-4 ring-purple-50" 
                    : "border-slate-100 hover:border-slate-200"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#4D148C] p-2.5 rounded-xl text-white">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-base leading-tight">FedEx Team</p>
                    <p className="text-xs text-slate-400 font-medium">Internal Access</p>
                  </div>
                </div>
                <div className={cn(
                  "w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center",
                  selectedRole === 'fedex' ? "border-[#4D148C]" : "border-slate-200"
                )}>
                  {selectedRole === 'fedex' && <div className="w-2.5 h-2.5 bg-[#4D148C] rounded-full" />}
                </div>
              </button>

              {/* DCA Role Option */}
              <button
                onClick={() => setSelectedRole('dca')}
                className={cn(
                  "w-full flex items-center justify-between p-5 rounded-[24px] border-2 transition-all duration-300 text-left",
                  selectedRole === 'dca' 
                    ? "border-[#4D148C] bg-purple-50/50 ring-4 ring-purple-50" 
                    : "border-slate-100 hover:border-slate-200"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#4D148C] p-2.5 rounded-xl text-white">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-base leading-tight">DCA Agency</p>
                    <p className="text-xs text-slate-400 font-medium">External Access</p>
                  </div>
                </div>
                <div className={cn(
                  "w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center",
                  selectedRole === 'dca' ? "border-[#4D148C]" : "border-slate-200"
                )}>
                  {selectedRole === 'dca' && <div className="w-2.5 h-2.5 bg-[#4D148C] rounded-full" />}
                </div>
              </button>
            </div>
          </div>

          <div className="space-y-6 pt-2">
            <button
              disabled={!selectedRole || !email || loading}
              onClick={handleContinue}
              className={cn(
                "w-full py-5 rounded-2xl font-bold text-white shadow-xl transition-all flex items-center justify-center gap-2",
                selectedRole && email && !loading
                  ? "bg-[#4D148C] hover:bg-[#3b0f6e] active:scale-95" 
                  : "bg-slate-200 cursor-not-allowed"
              )}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Signing in...
                </>
              ) : (
                <>
                  Continue to Dashboard <ArrowRight size={20} />
                </>
              )}
            </button>

            <p className="text-center text-[11px] text-slate-400 font-medium uppercase tracking-widest">
              Chennai, Tamil Nadu • FedEx Express
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;