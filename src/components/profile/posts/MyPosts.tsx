import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "./post/Post";

export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message="How are you?" likes={"3"} />
                <Post message="It's my first post" likes={"5"} />
            </div>
        </div>
    );
};
