import { BrowserRouter, useNavigate } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { NavigatorInitializer } from "./utils/NavigatorInitializer";
import { useEffect } from "react";
import { setNavigator } from "./utils/NavigationService";

function App() {
  const NavigationInitializer = () => {
    const navigate = useNavigate();
    useEffect(() => {
      setNavigator(navigate);
    }, [navigate]);
    return null;
  }

  return (
    <BrowserRouter>
      <NavigatorInitializer />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
