import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from "./views/Home"
import BlogCard from './components/BlogCard';
import Contact from './views/Contact';
import Reserva from './views/Reserva';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<BlogCard />} />
      <Route path="/Contacto" element={<Contact />} />
      <Route path="/Nosotros" element={<BlogCard />} />
      <Route path="/reserva" element ={<Reserva />} />
    </Routes>
  );
}

export default App;
