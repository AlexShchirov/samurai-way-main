import React from "react";

import { MyPosts } from "./posts/MyPosts";
import { ProfileInfo } from "./profileInfo/ProfileInfo";

export const Profile = (props:any) => {

    
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.posts}/>
        </div>
    );
};
