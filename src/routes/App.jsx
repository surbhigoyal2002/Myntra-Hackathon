import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from './Home';
import TryOn from "../components/TryOn";
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/try-on" element={<TryOn />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
