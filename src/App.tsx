import React from "react";
import "./App.css";
import { NavBar } from "./components/navBar/NavBar";
import { Header } from "./components/header/Header";
import { Profile } from "./components/profile/Profile";
import { Dialogs } from "./components/dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props: any) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <NavBar />
                <div className="app-wrapper-content">
                    <Route
                        exact
                        path={"/dialogs"}
                        render={() => (
                            <Dialogs
                                state={props.state.dialogsPage}
                            />
                        )}
                    />
                    <Route
                        path={"/profile"}
                        render={() => <Profile state={props.state.profilePage} />}
                    />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
