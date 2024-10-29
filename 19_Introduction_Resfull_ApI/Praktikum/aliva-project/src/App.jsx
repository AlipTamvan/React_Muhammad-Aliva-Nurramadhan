import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/pages/LandingPage";
import { ProductManagementPage } from "./components/pages/ProductManagementPage";
import { ProductDetail } from "./components/organisms/ProductDetail";
import { LoginPage } from "./components/pages/LoginPage";
import { useState, useEffect } from "react";
import { PrivateRoute } from "./components/organisms/PrivateRoute";
import { RegisterPage } from "./components/pages/RegisterPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.setItem("isAuthenticated", "false");
    setIsAuthenticated(false);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<PrivateRoute />}>
          <Route
            path="/product-management"
            element={<ProductManagementPage />}
          />
          <Route path="/detail/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
