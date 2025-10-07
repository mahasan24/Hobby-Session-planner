import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SessionsList from "./pages/SessionsList";
import SessionDetails from "./pages/SessionDetails";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/sessions">Sessions</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessions" element={<SessionsList />} />
        <Route path="/session/:id" element={<SessionDetails />} />
        
      </Routes>
    </>
  )
}

export default App;