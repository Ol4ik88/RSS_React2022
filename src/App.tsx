import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from 'components/Header/Header';
import Home from 'pages/Home';
import About from 'pages/About';
import PageNotFound from 'pages/PageNotFound';

function App() {
  return (
    <Router>
      <div className="App-container">
        <Header />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
