import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../fedex/Sidebar";

export default function FedexLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen w-full bg-[#F6F7FB]">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-[260px]">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main
        key={location.pathname}
        className="ml-[260px] flex-1 overflow-y-auto p-6"
      >
        <Outlet />
      </main>
    </div>
  );
}
