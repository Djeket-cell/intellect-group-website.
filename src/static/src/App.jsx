import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './assets/logo.jpg';
import HomePage from './components/HomePage';
import ExamPage from './components/ExamPage';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-white to-yellow-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exam/:level" element={<ExamPage />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

