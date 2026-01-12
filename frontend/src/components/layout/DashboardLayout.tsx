import React, { useState } from 'react';
import { Building2, Briefcase, ArrowRight, Package } from 'lucide-react';

const DashboardLayout: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<'internal' | 'agency' | null>(null);

  return (
    <div className="flex min-h-screen font-sans">
      {/* LEFT PANEL - STATS & BRANDING */}
      <div className="hidden lg:flex flex-col justify-center items-center w-1/2 bg-[#4D148C] text-white p-12 relative overflow-hidden">
        {/* Background Pattern (Subtle Circles) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="grid grid-cols-6 gap-8 p-10">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-12 h-12 border-4 border-white rounded-full" />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="z-10 text-center max-w-md">
          <div className="bg-[#FF6600] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-8 shadow-lg">
             <Package size={36} className="text-white" />
          </div>
          
          <h1 className="text-4xl font-bold mb-2">FedEx DCA</h1>
          <p className="text-xl font-medium mb-6">Case Management System</p>
          
          <p className="text-purple-100 text-sm leading-relaxed mb-12">
            Streamlined debt collection management powered by AI prioritization and intelligent workflow automation.
          </p>

          {/* Stats Bar */}
          <div className="flex justify-between items-center border-t border-purple-400/30 pt-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#FF6600]">156</p>
              <p className="text-[10px] uppercase tracking-wider text-purple-200">Active Cases</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#FF6600]">94%</p>
              <p className="text-[10px] uppercase tracking-wider text-purple-200">SLA Compliance</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#FF6600]">₹12.4L</p>
              <p className="text-[10px] uppercase tracking-wider text-purple-200">Recovered</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL - LOGIN/ROLE SELECTION */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-gray-500 mt-1">Select your role to continue</p>
          </div>

          <div className="space-y-4">
            {/* Role Option: Internal */}
            <div 
              onClick={() => setSelectedRole('internal')}
              className={`flex items-center p-5 border-2 rounded-2xl cursor-pointer transition-all ${
                selectedRole === 'internal' ? 'border-[#4D148C] bg-purple-50' : 'border-gray-100'
              }`}
            >
              <div className="bg-gray-100 p-3 rounded-xl mr-4">
                <Building2 className="text-gray-600" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">FedEx Internal Team</h3>
                <p className="text-xs text-gray-400">Admin & Supervisor Access</p>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selectedRole === 'internal' ? 'border-[#4D148C]' : 'border-gray-300'
              }`}>
                {selectedRole === 'internal' && <div className="w-3 h-3 bg-[#4D148C] rounded-full" />}
              </div>
            </div>

            {/* Role Option: Agency */}
            <div 
              onClick={() => setSelectedRole('agency')}
              className={`flex items-center p-5 border-2 rounded-2xl cursor-pointer transition-all ${
                selectedRole === 'agency' ? 'border-[#4D148C] bg-purple-50' : 'border-gray-100'
              }`}
            >
              <div className="bg-gray-100 p-3 rounded-xl mr-4">
                <Briefcase className="text-gray-600" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">DCA Agency Portal</h3>
                <p className="text-xs text-gray-400">Debt Collection Agency Access</p>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selectedRole === 'agency' ? 'border-[#4D148C]' : 'border-gray-300'
              }`}>
                {selectedRole === 'agency' && <div className="w-3 h-3 bg-[#4D148C] rounded-full" />}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button 
            disabled={!selectedRole}
            className={`w-full mt-10 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
              selectedRole 
                ? 'bg-[#9884B3] text-white hover:bg-[#8572a1]' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Continue to Dashboard <ArrowRight size={18} />
          </button>

          {/* Footer Info */}
          <footer className="mt-12 text-center">
             <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                Chennai, Tamil Nadu, India • FedEx Express
             </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;