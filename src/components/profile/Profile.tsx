import React from "react";

import { MyPosts } from "./posts/MyPosts";
import { ProfileInfo } from "./profileInfo/ProfileInfo";

export const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    );
};
