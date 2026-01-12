import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Lock, 
  ShieldCheck, 
  Building2, 
  Mail, 
  Phone, 
  Globe, 
  Save,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const DCASettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'notifications' | 'security'>('profile');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Settings</h1>
          <p className="text-slate-500 text-sm">Manage your agency credentials and preferences</p>
        </div>
        {isSaved && (
          <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-100 animate-in zoom-in-95">
            <CheckCircle2 size={16} />
            <span className="text-sm font-bold">Changes Saved Successfully</span>
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Nav */}
        <aside className="w-full lg:w-64 flex lg:flex-col gap-2 p-1 bg-slate-100/50 rounded-2xl lg:bg-transparent lg:p-0">
          {[
            { id: 'profile', label: 'Agency Profile', icon: User },
            { id: 'notifications', label: 'Notifications', icon: Bell },
            { id: 'security', label: 'Security', icon: Lock },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                "flex-1 lg:flex-none flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all",
                activeTab === tab.id 
                  ? "bg-[#4D148C] text-white shadow-lg shadow-purple-200" 
                  : "text-slate-500 hover:bg-slate-100"
              )}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </aside>

        {/* Content Area */}
        <div className="flex-1 bg-white rounded-2xl border border-slate-100 shadow-sm min-h-[500px]">
          {activeTab === 'profile' && (
            <div className="p-8 space-y-8 animate-in fade-in slide-in-from-right-4">
              <div className="flex items-center gap-5 pb-6 border-b border-slate-50">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-[#4D148C]">
                  <Building2 size={32} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Agency Information</h3>
                  <p className="text-xs text-slate-500 font-medium">This info will be visible to FedEx Administrators</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Agency Display Name</label>
                  <input type="text" defaultValue="ProRecover Solutions India" className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-[#4D148C]/10 outline-none text-sm font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Region Covered</label>
                  <select className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium outline-none">
                    <option>South India (Chennai Hub)</option>
                    <option>North India (Delhi Hub)</option>
                    <option>West India (Mumbai Hub)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Primary Contact Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 text-slate-400" size={16} />
                    <input type="email" defaultValue="admin@prorecover.in" className="w-full pl-10 p-3 bg-slate-50 border border-slate-100 rounded-xl text-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Office Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 text-slate-400" size={16} />
                    <input type="text" defaultValue="+91 44 2834 1000" className="w-full pl-10 p-3 bg-slate-50 border border-slate-100 rounded-xl text-sm" />
                  </div>
                </div>
              </div>

              <div className="pt-6 flex justify-end">
                <button 
                  onClick={handleSave}
                  className="flex items-center gap-2 px-8 py-3 bg-[#FF6600] text-white font-black rounded-xl hover:bg-[#e55c00] transition-all shadow-lg active:scale-95"
                >
                  <Save size={18} /> Update Profile
                </button>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="p-8 space-y-6 animate-in fade-in slide-in-from-right-4">
              <h3 className="font-bold text-slate-900 mb-4">Email Alerts</h3>
              <div className="space-y-3">
                {[
                  { title: "New Assignment", desc: "Instantly notify when FedEx assigns a new invoice." },
                  { title: "SLA Threshold", desc: "Alert when a case is 48 hours from breaching SLA." },
                  { title: "System Maintenance", desc: "Updates regarding portal downtime or upgrades." }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-slate-50 hover:bg-slate-50/80 transition-colors">
                    <div className="pr-4">
                      <p className="text-sm font-bold text-slate-800">{item.title}</p>
                      <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                    </div>
                    <div className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked={i !== 2} />
                      <div className="w-10 h-5 bg-slate-200 rounded-full peer peer-checked:bg-[#4D148C] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="p-8 space-y-8 animate-in fade-in slide-in-from-right-4">
              <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex gap-3 text-orange-800">
                <ShieldCheck className="shrink-0" size={20} />
                <p className="text-xs font-medium">Your password was last changed 45 days ago. We recommend updating every 90 days for FedEx compliance.</p>
              </div>
              
              <div className="max-w-sm space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Current Password</label>
                  <input type="password" placeholder="••••••••" className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-purple-100 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">New Password</label>
                  <input type="password" placeholder="••••••••" className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-purple-100 outline-none" />
                </div>
                <button className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-black transition-all">
                  Change Password
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};