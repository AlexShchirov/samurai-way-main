import React from "react";
import "./App.css";
import { NavBar } from "./components/navBar/NavBar";
import { Header } from "./components/header/Header";
import { Profile } from "./components/profile/Profile";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <NavBar/>
            <Profile/>            
        </div>
    );
};

export default App;
