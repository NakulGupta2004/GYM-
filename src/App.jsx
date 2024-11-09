import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Use element prop with component */}
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/Community" element={<Community />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
