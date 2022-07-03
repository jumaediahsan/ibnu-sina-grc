import * as React from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';
import Dashboard from './page/Dashboard';
import Rab from './page/Rab';

function App() {
 return (
  <div>
   <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="rab" element={<Rab />} />
    <Route path="manage" element={<Dashboard />} />
   </Routes>
  </div>
 );
}

export default App;