import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

// Layouts
import { DCALayout } from "./components/layout/DCALayout";
import FedexLayout from "./components/layout/FedexLayout";

// Pages
import LoginPage from "./pages/LoginPage";
import { DCADashboard } from "./pages/dca/DCADashboard";
import { DCACaseList } from "./pages/dca/DCACaseList";
import { DCACaseDetail } from "./pages/dca/DCACaseDetail";
import { DCASettings } from "./pages/dca/DCASettings";
import Dashboard from "./pages/fedex/Dashboard";
import CaseManagement from "./pages/fedex/CaseManagement";
import DCAAssignment from "./pages/fedex/DCAAssignment";
import Settings from "./pages/fedex/Settings";

/* Secure route guard */
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public */}
        <Route path="/login" element={<LoginPage />} />

        {/* FedEx Team */}
        <Route
          path="/fedex"
          element={
            <ProtectedRoute>
              <FedexLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="cases" element={<CaseManagement />} />
          <Route path="dca-assignment" element={<DCAAssignment />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* DCA Team */}
        <Route
          path="/dca"
          element={
            <ProtectedRoute>
              <DCALayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DCADashboard />} />
          <Route path="cases" element={<DCACaseList />} />
          <Route path="cases/:caseId" element={<DCACaseDetail />} />
          <Route path="settings" element={<DCASettings />} />
        </Route>

        {/* Default */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </AuthProvider>
  );
}