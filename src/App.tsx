import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from 'components/common/Header/Header';
import Home from 'pages/Home';
import About from 'pages/About';
import PageNotFound from 'pages/PageNotFound';
import FormPage from 'pages/FormPage';
import { AppProvider } from 'store/appContext';

function App() {
  return (
    <AppProvider>
      <div className="App-container">
        <Header />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
