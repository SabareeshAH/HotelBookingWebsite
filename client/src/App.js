import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Hotel from "./pages/hotel/Hotel.jsx";
//import Navbar from "./pages/components/navbar/Navbar";
import './App.css';
import Hi from "./Hi.js";
import List from "./pages/list/List.jsx";
import Login from "./pages/login/Login.jsx";


function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
