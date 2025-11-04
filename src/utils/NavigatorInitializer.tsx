import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setNavigator } from "./NavigationService";

export const NavigatorInitializer = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setNavigator(navigate);
  }, [navigate]);

  return null;
}