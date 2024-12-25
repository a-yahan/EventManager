import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login.jsx';
import Signup from './Signup.jsx';
import UserProfile from './UserProfile.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
