import React from "react";
import s from './Profile.module.css' ;

export const Profile = () => {
    return (
        <div className={s.profile}>
        <div>
            <img
                className="wideImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Jw2cJRnIjTQwOVpryhFuBsc1WmqjSi2IqA&usqp=CAU"
                alt=""
            />
        </div>
        <div>avatar+ descr</div>
        <div>
            my posts
            <div>new post</div>
        </div>
        <div className={s.posts}>
            <div className={s.item}>post 1</div>
            <div className={s.item}>post 2</div>
        </div>
    </div>
    );
};
