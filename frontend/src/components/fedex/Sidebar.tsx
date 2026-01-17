import {
  LayoutDashboard,
  ClipboardList,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const menuItemClasses = (path: string) =>
    `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition
     ${
       isActive(path)
         ? "bg-[#45207A] text-white"
         : "text-white hover:bg-[#3A1768]"
     }`;

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-[260px] flex-col bg-[#2E0F59] text-white">
      {/* Logo */}
      <div className="px-6 py-6">
        <h1 className="text-xl font-bold">FedEx</h1>
        <p className="text-xs text-[#cfc7ff]">DCA Management</p>
      </div>

      {/* User */}
      <div className="flex items-center gap-3 px-6 py-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5b2db3] font-semibold">
          P
        </div>

        <div>
          <p className="text-sm font-semibold">Priya Sharma</p>
          <p className="text-xs text-[#cfc7ff]">FedEx Team</p>
        </div>
      </div>

      <div className="mx-4 my-2 h-px bg-[#40207a]" />

      {/* Menu */}
      <nav className="flex flex-col gap-1 px-4">
        <button
          onClick={() => navigate("/fedex/dashboard")}
          className={menuItemClasses("/fedex/dashboard")}
        >
          <LayoutDashboard className="h-4 w-4" />
          Dashboard
        </button>

        <button
          onClick={() => navigate("/fedex/cases")}
          className={menuItemClasses("/fedex/cases")}
        >
          <ClipboardList className="h-4 w-4" />
          Case Management
        </button>

        <button
          onClick={() => navigate("/fedex/dca-assignment")}
          className={menuItemClasses("/fedex/dca-assignment")}
        >
          <Users className="h-4 w-4" />
          DCA Assignment
        </button>

        <button
          onClick={() => navigate("/fedex/settings")}
          className={menuItemClasses("/fedex/settings")}
        >
          <Settings className="h-4 w-4" />
          Settings
        </button>
      </nav>

      <div className="flex-1" />

      {/* Logout */}
      <div className="px-4 pb-4">
        <button
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-white hover:bg-[#3A1768]"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  );
}
