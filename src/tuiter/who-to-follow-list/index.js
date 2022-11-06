import React from "react";
// import whoArray from './who.json';
import WhoToFollowListItem
    from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const whoArray = useSelector((state) => state.who);
    return (
        <div className="list-group">
            <div className="list-group-item list-group-item-action fw-bolder">
                <h3>Who to follow</h3>
            </div>
            {
                whoArray.map(who =>
                    <WhoToFollowListItem
                        key={who._id}
                        who={who}/>
                )
            }
        </div>
    );
};

export default WhoToFollowList;