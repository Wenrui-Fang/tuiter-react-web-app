import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
// import {deleteTuit} from "./home-post-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {
        post = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "../../../images/spaceX.jpeg",
            "liked": true,
            "replies": 123,
            "retuits": 1432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return (
        <li className="list-group-item">
            <div className="row mt-2">
                <div className="col-2">
                    <img className="rounded-circle" alt="avatar" src={`/images/${post.image}`} width={60} height={60}/>
                </div>
                <div className="col-10">
                    <div className="fw-bolder">
                        {post.userName}
                        <i className="bi bi-check-circle-fill ps-2 pe-2 text-primary"></i>
                        <span className="text-secondary">{post.handle} · {post.time}</span>
                        <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(post._id)}></i>
                    </div>
                    <div className="wd-border-main wd-content-img-text-border">
                        <p>{post.tuit}</p>
                    </div>
                    <TuitStats post={post}/>
                </div>
            </div>
        </li>
    );
};

export default TuitItem;