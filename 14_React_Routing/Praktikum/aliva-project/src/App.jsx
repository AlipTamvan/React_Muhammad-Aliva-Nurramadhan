import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/pages/LandingPage";
import { ProductManagement } from "./components/pages/ProductManagement";
import { ProductDetail } from "./components/organisms/ProductDetail";
import { Login } from "./components/organisms/Login";
import { useState, useEffect } from "react";
import { PrivateRoute } from "./components/organisms/PrivateRoute";

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
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route element={<PrivateRoute />}>
          <Route path="/product-management" element={<ProductManagement />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
