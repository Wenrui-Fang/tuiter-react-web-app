import React from "react";
// import postsArray from './home-posts.json';
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";

const TuitsList = () => {
    const postsArray = useSelector(state => state.homePosts)
    return (
        <ul className="list-group wd-border-main">
            {
                postsArray.map(post =>
                    <TuitItem key={post._id} post={post}/>)
            }
        </ul>
    );
};
export default TuitsList;