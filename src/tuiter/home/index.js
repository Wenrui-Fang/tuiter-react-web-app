import React from "react";
import postsArray from './home-posts.json';
import PostItem from "./post-item";

const HomeComponent = () => {
    return (
        <ul className="list-group wd-border-main">
            {
                postsArray.map(post =>
                    <PostItem key={post._id} post={post}/>)
            }
        </ul>
    );
};
export default HomeComponent;

