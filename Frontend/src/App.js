import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Topbar from './components/topbar/Topbar'; // Import your topbar
import Home from './pages/home/Home'; // Import Home page
import Profile from './pages/profile/Profile'; // Import Profile page

export default function App() {
  return (
    <Router>
      <Topbar />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/profile" element={<Profile />} /> {/* Profile page */}
      </Routes>
    </Router>
  );
}
