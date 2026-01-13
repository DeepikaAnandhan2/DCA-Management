import { Routes, Route, Navigate } from "react-router-dom";
import FedexLayout from "../layout/FedexLayout";

import Dashboard from "../pages/fedex/Dashboard";
import CaseManagement from "../pages/fedex/CaseManagement";
import DCAAssignment from "../pages/fedex/DCAAssignment";
import Settings from "../pages/fedex/Settings";

export default function AppRouter() {
  return (
    <Routes>
      {/* FedEx Layout Wrapper */}
      <Route path="/fedex" element={<FedexLayout />}>
        
        {/* Default page */}
        <Route index element={<Navigate to="dashboard" />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="cases" element={<CaseManagement />} />
        <Route path="dca" element={<DCAAssignment />} />
        <Route path="settings" element={<Settings />} />

      </Route>

      {/* Redirect root */}
      <Route path="*" element={<Navigate to="/fedex/dashboard" />} />
    </Routes>
  );
}
