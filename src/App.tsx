import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/profile/*" element={<Profile />}/>
            </Routes>            
            <Footer />
        </div>
    );
};
export default App;