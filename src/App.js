import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PoojaCard from './PoojaCard'; 
import BlankPage from './BlankPage'; 
import Data from './Data';


export default function App() {
  const cards = Data.map(item => (
    <PoojaCard
      key={item.id}
      {...item}
    />
  ));

  return (
    <Router>
      <Routes>
        <Route path="/blank-page" element={<BlankPage />} />
        <Route path="/" element={<div className="App">{cards}</div>} />
      </Routes>
    </Router>
  );
}
