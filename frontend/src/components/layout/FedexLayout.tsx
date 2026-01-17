import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../fedex/Sidebar";

export default function FedexLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen w-full">
      {/* Fixed Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-[260px] bg-purple-900">
        <Sidebar />
      </aside>

      {/* Scrollable Content */}
      <main
        key={location.pathname}
        className="ml-[260px] min-h-screen flex-1 bg-[#F6F7FB] p-6 overflow-y-auto"
      >
        <Outlet />
      </main>
    </div>
  );
}
