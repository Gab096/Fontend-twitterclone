import React from "react";
import Routes from "./routes/routes"
import { BrowserRouter as Router } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <Router><Routes /></Router>
    </div>
  );
}

