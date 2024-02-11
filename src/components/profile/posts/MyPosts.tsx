import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "./post/Post";

export const MyPosts = () => {
    let posts = [
        { id: 1, messages: "How are you?", likesCount: 9 },
        { id: 2, messages: "It's my first post", likesCount: 11 },
    ];

    let postsElements = posts.map((p) => (
        <Post message={p.messages} likes={p.likesCount} />
    ));
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
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
};
