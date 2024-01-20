import React from "react";
import s from "./Post.module.css";

export const Post = (props: any) => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHhKdL3xljZmPNO7hRFbYnUbGVNHFIXLOqQ&usqp=CAU"
                alt=""
            />
            {props.message}
            <div>
                <span>{props.likes}</span>
            </div>
        </div>
    );
};
