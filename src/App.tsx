import React from "react";
import "./App.css";
import { NavBar } from "./components/navBar/NavBar";
import { Header } from "./components/header/Header";
import { Profile } from "./components/profile/Profile";
import { Dialogs } from "./components/dialogs/Dialogs";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <NavBar />
            {/* <Profile/>             */}
            <div className='app-wrapper-content'>
                <Dialogs />
            </div>
        </div>
    );
};

export default App;
