import React from "react";
import s from './Profile.module.css' ;
import { MyPosts } from "./posts/MyPosts";

export const Profile = () => {
    return (
        <div >
        <div >
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Jw2cJRnIjTQwOVpryhFuBsc1WmqjSi2IqA&usqp=CAU"
                alt=""
            />
        </div>
        <div>avatar+ descr</div>
        <MyPosts/>
    </div>
    );
};
