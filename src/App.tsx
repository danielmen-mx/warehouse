import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DashboardPage } from "@/features/inventory/pages/DashboardPage";
import { LoginPage } from "@/features/auth/pages/LoginPage";
import PrivateRoute from "./app/routes/PrivateRoute";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setNavigator } from "@/utils/NavigationService";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    setNavigator(navigate);
  }, [navigate]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
