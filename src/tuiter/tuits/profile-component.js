import React from "react";
import {useSelector} from "react-redux";
import "./index.css";
import {createTuit} from "./home-post-reducer";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const userProfile = useSelector(state => state.profile)

    return (
        <>
            <div className="ms-2 row">
                <div className="col-1">
                    <i className="bi bi-arrow-left"></i>
                </div>
                <div className="col-11">
                    <h5 className="fw-bolder m-0">{userProfile.firstName} {userProfile.lastName}</h5>
                    <span className="text-secondary">6114 Tuits</span>
                </div>
            </div>
            <div className="position-relative mb-5">
                <img src={userProfile.bannerPicture} className="w-100" height={250} alt="banner"/>
                <img src={userProfile.profilePicture} width={140} height={140} className="position-absolute wd-nudge-up rounded-circle" alt="avatar"/>
                <Link to="/tuiter/edit-profile">
                    <button className="rounded-pill btn btn-default float-end mt-2 me-3 fw-bold border-1 border-secondary">
                        Edit Profile
                    </button>
                </Link>
            </div>
            <div className="ms-4 pt-5">
                <h5 className="fw-bolder m-0">{userProfile.firstName} {userProfile.lastName}</h5>
                <span className="text-secondary">{userProfile.handle}</span>
                <p className="pt-3">
                    {userProfile.bio}
                </p>
            </div>
            <div className="ms-4 text-secondary">
                <span className="pe-4">
                    <i className="bi bi-geo-alt pe-2"></i>
                    {userProfile.location}
                </span>
                <span className="pe-4">
                    <i className="bi bi-balloon pe-2"></i>
                    Born {userProfile.dateOfBirth}
                </span>
                <span className="pe-4">
                    <i className="bi bi-calendar3 pe-2"></i>
                    Joined {userProfile.dateJoined}
                </span>
            </div>
            <div className="ms-4 mt-3 fw-bolder">
                {userProfile.followingCount}
                <span className="fw-normal text-secondary ps-2 pe-4">Following</span>
                {userProfile.followersCount}
                <span className="fw-normal text-secondary ps-2">Followers</span>
            </div>
        </>
    );
};
export default ProfileComponent;