import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import TopMenu from "./components/TopMenu/TopMenu";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Pricing from "./components/Pricing/Pricing";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Shop from "./components/Shop/Shop";
import Brands from "./components/Brands/Brands";
import Nike from "./components/Brands/NikeProducts";
import Adidas from "./components/Brands/AdidasProducts";
import Jordan from "./components/Brands/JordanProducts";
import LV from "./components/Brands/LVProducts";
import Offers from "./components/Offers/Offers";
import NewProducts from "./components/NewProducts/NewProducts";
import MenProducts from "./components/MenProducts/MenProducts";
import WomanProducts from "./components/WomanProducts/WomanProducts";
import Dashboard from "./components/Admin/Dashboard";
import ProductsAdmin from "./components/Admin/ProductsAdmin";
import OrdersAdmin from "./components/Admin/OrdersAdmin";
import UsersAdmin from "./components/Admin/UsersAdmin";
import AdminLogin from "./components/Admin/AdminLogin";
import RegisterAdmin from "./components/Admin/RegisterAdmin"; // Importar RegisterAdmin
import AddProduct from "./components/Admin/AddProduct"; // Importar el componente de Agregar Producto
import PrivateRoute from "./components/Admin/PrivateRoute"; // Importar componente para proteger rutas privadas

function App() {
  return (
    <Router>
      <Navbar />
      <TopMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/brands/nike" element={<Nike />} />
        <Route path="/brands/adidas" element={<Adidas />} />
        <Route path="/brands/jordan" element={<Jordan />} />
        <Route path="/brands/lv" element={<LV />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/new" element={<NewProducts />} />
        <Route path="/men" element={<MenProducts />} />
        <Route path="/women" element={<WomanProducts />} />

        {/* Ruta para login de administradores */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Ruta para registrar administradores */}
        <Route path="/register-admin" element={<RegisterAdmin />} />

        {/* Rutas protegidas de administrador */}
        <Route
          path="/admin"
          element={<PrivateRoute component={Dashboard} />}
        />
        <Route
          path="/admin/products"
          element={<PrivateRoute component={ProductsAdmin} />}
        />
        <Route
          path="/admin/products/new"
          element={<PrivateRoute component={AddProduct} />}
        />
        <Route
          path="/admin/orders"
          element={<PrivateRoute component={OrdersAdmin} />}
        />
        <Route
          path="/admin/users"
          element={<PrivateRoute component={UsersAdmin} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
