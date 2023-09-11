import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import Home from "./pages/Home";
import Faqs from "./pages/Faqs";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <header style={{ backgroundColor: "rgba(0, 174, 165, 0.35)" }}>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
