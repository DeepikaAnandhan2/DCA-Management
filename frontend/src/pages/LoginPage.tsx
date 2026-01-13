import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Box, Briefcase, Building2, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<'fedex' | 'dca' | null>(null);

  const handleContinue = () => {
    if (selectedRole) {
      login(selectedRole);
      navigate(selectedRole === 'dca' ? '/dca' : '/fedex');
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
        <div className="w-full max-w-md space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black text-slate-900">Welcome Back</h2>
            <p className="text-slate-400 font-medium">Select your role to continue</p>
          </div>

          <div className="space-y-4">
            {/* FedEx Role Option */}
            <button
              onClick={() => setSelectedRole('fedex')}
              className={cn(
                "w-full flex items-center justify-between p-6 rounded-[24px] border-2 transition-all duration-300 text-left",
                selectedRole === 'fedex' 
                  ? "border-[#4D148C] bg-purple-50/50 ring-4 ring-purple-50" 
                  : "border-slate-100 hover:border-slate-200"
              )}
            >
              <div className="flex items-center gap-5">
                <div className="bg-[#4D148C] p-3 rounded-2xl text-white">
                  <Building2 size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg leading-tight">FedEx Internal Team</p>
                  <p className="text-sm text-slate-400 font-medium">Admin & Supervisor Access</p>
                </div>
              </div>
              <div className={cn(
                "w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center",
                selectedRole === 'fedex' ? "border-[#4D148C]" : "border-slate-200"
              )}>
                {selectedRole === 'fedex' && <div className="w-3 h-3 bg-[#4D148C] rounded-full" />}
              </div>
            </button>

            {/* DCA Role Option */}
            <button
              onClick={() => setSelectedRole('dca')}
              className={cn(
                "w-full flex items-center justify-between p-6 rounded-[24px] border-2 transition-all duration-300 text-left",
                selectedRole === 'dca' 
                  ? "border-[#4D148C] bg-purple-50/50 ring-4 ring-purple-50" 
                  : "border-slate-100 hover:border-slate-200"
              )}
            >
              <div className="flex items-center gap-5">
                <div className="bg-[#4D148C] p-3 rounded-2xl text-white">
                  <Briefcase size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg leading-tight">DCA Agency Portal</p>
                  <p className="text-sm text-slate-400 font-medium">Debt Collection Agency Access</p>
                </div>
              </div>
              <div className={cn(
                "w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center",
                selectedRole === 'dca' ? "border-[#4D148C]" : "border-slate-200"
              )}>
                {selectedRole === 'dca' && <div className="w-3 h-3 bg-[#4D148C] rounded-full" />}
              </div>
            </button>
          </div>

          <div className="space-y-6">
            <button
              disabled={!selectedRole}
              onClick={handleContinue}
              className={cn(
                "w-full py-5 rounded-2xl font-bold text-white shadow-xl transition-all flex items-center justify-center gap-2",
                selectedRole 
                  ? "bg-[#4D148C] hover:bg-[#3b0f6e] active:scale-95 translate-y-0" 
                  : "bg-slate-200 cursor-not-allowed translate-y-0"
              )}
            >
              Continue to Dashboard <ArrowRight size={20} />
            </button>

            <p className="text-center text-[11px] text-slate-400 font-medium">
              Chennai, Tamil Nadu, India • FedEx Express
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default LoginPage;