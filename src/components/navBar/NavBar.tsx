import React from "react";
import s from './NavBar.module.css' ;
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to={"/profile"} activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={"/dialogs"} activeClassName={s.active}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={"3"} activeClassName={s.active}>News</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to={"4"} activeClassName={s.active}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={"5"} activeClassName={s.active}>Settings</NavLink>
                </div>
            </nav>
    );
};
