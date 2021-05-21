import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AppRouter from "./Router/AppRouter";

function App() {
  document.title = "Pokedex";
  return (
    <React.Fragment>
      <AppRouter />
    </React.Fragment>
  );
}

export default App;
