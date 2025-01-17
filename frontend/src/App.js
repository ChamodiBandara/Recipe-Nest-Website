// App.js

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Recipe from './components/Recipe';
import Dinner from './Recipecom/Dinner';
import Breakfast from './Recipecom/Breakfast';
import Lunch from './Recipecom/Lunch';
import Dessert from './Recipecom/Dessert';
import Thai from './Recipecom/Thai';
import Indian from './Recipecom/Indian';
import Mexican from './Recipecom/Mexican';
import Drink from './Recipecom/Drink';
import Salad from './Recipecom/Salad';
import FriedRice from './Recipepages/FriedRice';
import Noodles from './Recipepages/Noodles';
import MexicanRice from './Recipepages/MexicanRice';
import Hawaiian from './Recipepages/Hawaiin';
import Pizza from './Recipepages/pizza';
import MeatLoaf from './Recipepages/Meatloaf';

import './App.css'; 
import './index.css';

function App() {
  return (
    <Router>
    
    <div className="main-content">
      
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/dessert" element={<Dessert />} />
        <Route path="/thai" element={<Thai />} />
        <Route path="/indian" element={<Indian />} />
        <Route path="/mexican" element={<Mexican />} />
        <Route path="/drink" element={<Drink />} />
        <Route path="/salad" element={<Salad />} />
        <Route path="/chicken-fried-rice" element={<FriedRice />} />
        <Route path="/hawaiian-chicken-salad" element={<Hawaiian/>}/>
        <Route path="/meatloaf" element={<MeatLoaf/>}/>
        <Route path="/chicken-pizza" element={<Pizza/>}/>
        <Route path="/mexican-rice" element={<MexicanRice/>}/>
        <Route path="/chicken-teriyaki-noodles" element={<Noodles/>}/>

       
      
      </Routes>
      
    </div>

  </Router>
  );
}

export default App;
