import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Path corrected to 'contexts' as per your folder structure
import { AuthProvider, useAuth } from "./contexts/AuthContext"; 

// Layouts
import { DCALayout } from "./components/layout/DCALayout";

// Pages
import LoginPage from "./pages/LoginPage";
import { DCADashboard } from "./pages/dca/DCADashboard";
import { DCACaseList } from "./pages/dca/DCACaseList";
import { DCACaseDetail } from "./pages/dca/DCACaseDetail";
import { DCASettings } from "./pages/dca/DCASettings";

/**
 * ProtectedRoute Wrapper
 * Ensures users are redirected to login if not authenticated
 */
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<LoginPage />} />

          {/* DCA Protected Routes with Sidebar Layout */}
          <Route 
            path="/dca" 
            element={
              <ProtectedRoute>
                <DCALayout />
              </ProtectedRoute>
            }
          >
            {/* Child routes render inside the DCALayout Outlet */}
            <Route index element={<DCADashboard />} />
            <Route path="cases" element={<DCACaseList />} />
            <Route path="cases/:caseId" element={<DCACaseDetail />} />
            <Route path="settings" element={<DCASettings />} />
          </Route>

          {/* Root and Fallback Redirects */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
  
}

export default App;