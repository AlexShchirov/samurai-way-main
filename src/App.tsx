import React from "react";
import "./App.css";

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <div><img className="logo"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRENF9uv9UWIWWbExsgj7XyX58xMFAOZTzUSQ&usqp=CAU"
                    alt=""/></div>
            </header>

            <nav className="nav">
                <div><a href="1">Profile</a></div>
                <div><a href="2">Messages</a></div>
                <div><a href="3">News</a></div>
                <div><a href="4">Mesic</a></div>
                <div><a href="5">Settings</a></div>
            </nav>

            <div className="content">
                <div><img className="wideImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Jw2cJRnIjTQwOVpryhFuBsc1WmqjSi2IqA&usqp=CAU" alt="" /></div>
                <div>avatar+ descr</div>
                <div>my posts
                    <div>new post</div>
                </div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
                

            </div>
        </div>
    );
};

export default App;
