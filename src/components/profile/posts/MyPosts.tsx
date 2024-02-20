import React, { LegacyRef } from "react";
import s from "./MyPosts.module.css";
import { Post } from "./post/Post";

export const MyPosts = (props:any) => {
    

    let postsElements = props.posts.map((p:any) => (
        <Post message={p.messages} likes={p.likesCount} />
    ));

    let newPostElement:LegacyRef<HTMLTextAreaElement> = React.createRef()

    const addPost = () => {
        let text = newPostElement.current?.value
        alert(text)
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
};
