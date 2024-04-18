// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import AdminLogin from './Components/AdminLogin';
import UserLogin from './Components/UserLogin';
import AdminSignUp from './Components/AdminSignUp';
import AdminHomePage from './Components/AdminHomePage';

function App() {
  return (
    <div className="App">
     {/* <LandingPage/> */}
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/adminlogin" element={<AdminLogin/>}/>
      <Route path="/userlogin" element={<UserLogin/>}/>
      <Route path="/adminsignup" element={<AdminSignUp/>}/>
      <Route path='/adminhomepage/*' element={<AdminHomePage/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;





