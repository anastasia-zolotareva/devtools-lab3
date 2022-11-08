import React from "react";
import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content"><p>Content</p></div>
      <Footer/>
    </div>
  );
}

export default App;
