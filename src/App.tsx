import React from "react";
import "./App.css";
import { getJSDocReturnType } from "typescript";

const App = () => {
    return (
        <>
            <Header />
            <Technologies />
        </>
    );
};
const Technologies = () => {
    return (
        <div>
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    );
};

const Header = () => {
    return (
        <div>
            <a href="#s">Home</a>
            <a href="#s">News</a>
            <a href="#s">Messages</a>
        </div>
    );
};

export default App;
