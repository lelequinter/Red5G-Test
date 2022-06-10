import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import Home from "./pages/home/Home";
import Pages from "./pages/Pages";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
