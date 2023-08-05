import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./components/Navigation";
import "./App.css";
import Body from "./components/Body"
const App = () => {
  return (
    <div className="container">
      <Navigation/>
      <Body/>
    </div>
  );
};

export default App;
