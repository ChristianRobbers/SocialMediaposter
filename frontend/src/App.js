import {Routes, Route } from "react-router-dom";
import Cookies from "universal-cookie";

//Global css
import './App.css'

//Every page
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Someposts from './pages/SoMeposts'
import Descriptions from './pages/Descriptions'
import Standardtext from './pages/Standardtext'
import Support from './pages/Support'
import Selectedproperty from "./pages/Selectedproperty"
import Mypage from './pages/MyPage'
import NotLoggedIn from "./pages/NotLoggedIn"


//getting browser cookie to check if the user is logged in
const cookies = new Cookies();
const token = cookies.get("TOKEN");


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/notloggedin" element={<NotLoggedIn />} />
        <Route path="/dashboard" element={token ? <Dashboard /> : <NotLoggedIn />} />
        <Route path="/someopslag" element={token ? <Someposts /> : <NotLoggedIn />} />
        <Route path="/beskrivelser" element={token ? <Descriptions /> : <NotLoggedIn />} />
        <Route path="/standardtekster" element={token ? <Standardtext /> : <NotLoggedIn />} />
        <Route path="/support" element={token ? <Support/> : <NotLoggedIn />} />
        <Route path="/property/:id" element={token ? <Selectedproperty /> : <NotLoggedIn />} />
        <Route path="/minside" element={token ? <Mypage /> : <NotLoggedIn />} />
      </Routes>
    </div>
  );
}

export default App;
