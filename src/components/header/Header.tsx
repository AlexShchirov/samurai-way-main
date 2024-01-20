import React from "react";
import s from './Header.module.css' ;

export const Header = () => {
    return (
            <header className={s.header}>
                <div>
                    <img
                        className={s.logo}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRENF9uv9UWIWWbExsgj7XyX58xMFAOZTzUSQ&usqp=CAU"
                        alt=""
                    />
                </div>
            </header>
    );
};
