import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, ClipboardList, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext'; // Fixed plural path
import { cn } from '@/lib/utils';

export const Sidebar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="w-64 bg-[#4D148C] min-h-screen flex flex-col text-white">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-[#FF6600] p-2 rounded-lg">
          <img src="/fedex-logo-white.png" alt="FedEx" className="w-8" />
        </div>
        <div>
          <h1 className="font-bold text-lg leading-tight text-white">FedEx</h1>
          <p className="text-[10px] text-white/60">DCA Management</p>
        </div>
      </div>

      <div className="px-6 py-4 flex items-center gap-3 border-t border-b border-white/10">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
          {user?.name?.charAt(0) || 'A'}
        </div>
        <div>
          <p className="text-sm font-bold leading-none">{user?.name || 'Arun Kumar'}</p>
          <p className="text-[11px] text-white/50 mt-1">DCA Agency</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        <NavLink to="/dca" end className={({ isActive }) => cn(
          "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
          isActive ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"
        )}>
          <LayoutDashboard size={20} /> Dashboard
        </NavLink>
        
        <NavLink to="/dca/cases" className={({ isActive }) => cn(
          "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
          isActive ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"
        )}>
          <ClipboardList size={20} /> Assigned Cases
        </NavLink>

        <NavLink to="/dca/settings" className={({ isActive }) => cn(
          "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
          isActive ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"
        )}>
          <Settings size={20} /> Settings
        </NavLink>
      </nav>

      <div className="p-4 border-t border-white/10">
        <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white transition-colors">
          <LogOut size={20} /> Logout
        </button>
      </div>
    </div>
  );
};