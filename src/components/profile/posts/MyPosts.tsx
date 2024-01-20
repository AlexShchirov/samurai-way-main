import React from "react";
import s from "./MyPosts.module.css";
import { Post } from './post/Post';

export const MyPosts = () => {
    return (
        <div>
            <textarea></textarea>
            <button>Add Post</button>
            My posts
            <div>new post</div>
            <div className={s.posts}>
                <Post message='How are you?' likes={'3'}/>
                <Post message="It's my first post" likes={'5'}/>
            </div>
        </div>
    );
};
