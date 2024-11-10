import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Community from './components/Community';
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;