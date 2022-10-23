import React from "react";

const WhoToFollowListItem = (
    {
        who = {userName: 'NASA', handle: 'NASA', avatarIcon: 'NASA.jpeg'}
    }
) => {
    return (
        <div className="list-group-item list-group-item-action">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" width={48} height={48} alt="avatar" src={who.avatarIcon}/>
                </div>
                <div className="col-7">
                    <div className="fw-bold">
                        {who.userName}
                        <i className="bi bi-check-circle-fill ps-2"></i>
                    </div>
                    <div className="text-secondary">@{who.handle}</div>
                </div>
                <div className="col-3">
                    <button className="btn btn-primary rounded-pill mt-1">Follow</button>
                </div>
            </div>
        </div>
    );
};
export default WhoToFollowListItem;