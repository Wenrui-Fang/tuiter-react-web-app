import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitItem from "./tuit-item";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.homePostsData)
    const dispatch = useDispatch();
    //eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    return (
        <ul className="list-group wd-border-main">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(post =>
                    <TuitItem key={post._id} post={post}/>)
            }
        </ul>
    );
};
export default TuitsList;