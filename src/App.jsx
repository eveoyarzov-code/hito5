import { Routes, Route } from "react-router-dom";
// Componentes Globales
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Vistas desde la carpeta 'pages'
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage"; 
import LoginPage from "./pages/LoginPage";       
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />

      {/* 🧭 Configuración de las rutas requeridas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        
        {/* Cualquier ruta que no coincida mostrará NotFound */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
