import React from "react";
import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";
import "./styles/App.css";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import MainPage from "./pages/Main";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
/**
 * App function
 * 
 * @returns {import("react").DOMElement}
 */
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes className="content">
        <Route exect path="/" element={<MainPage/>}/>
        <Route exect path="/services" element={<Services/>}/>
        <Route exect path="/aboutus" element={<AboutUs/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
