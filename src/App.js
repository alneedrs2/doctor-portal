import './App.css';
import Header from './components/Shared/Header/Header';
import { Routes, Route} from "react-router-dom";
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Appoinment from './components/Pages/Appoinment/Appoinment';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appoinment" element={<Appoinment />} />
      </Routes>
    </div>
  );
}

export default App;
