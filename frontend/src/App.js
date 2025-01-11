// App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import './App.css'; // Import App.css from the root folder
import './index.css';
function App() {
  return (
    <Router>
    
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      
      </Routes>
    </div>

  </Router>
  );
}

export default App;
