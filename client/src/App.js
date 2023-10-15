import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from "./pages/Register.js";
import Header from "./components/Header.js";
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import Addblog from "./pages/Addblog.js";
import Addcategory from "./pages/Addcategory.js";
import Protectedd from "./components/Protectedd.js";
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
      <Route path='/' element={<Protectedd/>}>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/add-blog" element={<Addblog/>}/>
      <Route path="/add-category" element={<Addcategory/>}/>
     
      </Route>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
