import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate ,useNavigate} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Task1 from './Components/Task1';
import Contactus from './Components/Contact';
import Footer from './Components/Footer';
import AddTask from './Components/AddTask';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';

import SlidingAuthPage from './Components/SignupSignin';
import Login from './Components/Login';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import Page5 from './Pages/Page5';

function App() {
  return (
    <div className="App">
       <Routes>
   
   <Route path="/task" element={<Page2 />} />
   <Route path="/" element={<Page1 />} />
   <Route path="/register" element={<SlidingAuthPage />} />
   <Route path="/login" element={<Login />} />
   <Route path="/about" element={<Page3 />} />
   <Route path="/calendar" element={<Page4 />} />
   <Route path="/verify" element={<Page5 />} />
           
  
   
   
   
   
   
</Routes>

      
      
    </div>
  );
}

export default App;
