import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./index.css";
import {Link} from "react-router-dom";
import {updateProfile} from "./profile-reducer";

const EditProfile = () => {
    const userProfile = useSelector(state => state.profile)
    let [newProfile, setNewProfile] = useState(userProfile);
    const dispatch = useDispatch();
    const saveProfileClickHandler = () => {
        dispatch(updateProfile(newProfile));
    }
    return (
        <>
            <div className="ms-2 row">
                <div className="col-1">
                    <Link to="/tuiter/profile">
                        <i className="bi bi-x-lg text-black fw-bolder"></i>
                    </Link>
                </div>
                <div className="col-3">
                    <h5 className="fw-bolder">Edit profile</h5>
                </div>
                <div className="col-8">
                    <Link to="/tuiter/profile">
                        <button className="rounded-pill btn btn-dark float-end fw-bold me-2 mb-1"
                                onClick={saveProfileClickHandler}>
                            Save
                        </button>
                    </Link>
                </div>
            </div>
            <div className="position-relative mb-5">
                <img src={userProfile.bannerPicture} className="w-100" height={250} alt="banner"/>
                <img src={userProfile.profilePicture} width={140} height={140}
                     className="position-absolute wd-nudge-up rounded-circle" alt="avatar"/>
            </div>
            <div className="pt-5">
                <label className="ms-3 text-secondary">Name</label>
                <textarea value={newProfile.firstName}
                          className="form-control border-1"
                          onChange={(event) => {
                              const value = event.target.value;
                              // console.log(value)
                              // const name = value.split(" ");
                              // console.log(name)
                              const newP = {
                                  ...userProfile,
                                  firstName: value,
                                  lastName: ""
                              };
                              setNewProfile(newP);
                          }
                          }>
               </textarea>
            </div>
            <div className="pt-3">
                <label className="ms-3 text-secondary">Bio</label>
                <textarea value={newProfile.bio}
                          className="form-control border-1"
                          onChange={(event) => {
                              const value = event.target.value;
                              const newP = {
                                  ...userProfile,
                                  bio: value,
                              };
                              setNewProfile(newP);
                          }
                          }>
               </textarea>
            </div>
            <div className="pt-3">
                <label className="ms-3 text-secondary">Location</label>
                <textarea value={newProfile.location}
                          className="form-control border-1"
                          onChange={(event) => {
                              const value = event.target.value;
                              const newP = {
                                  ...userProfile,
                                  location: value,
                              };
                              setNewProfile(newP);
                          }
                          }>
               </textarea>
            </div>
            <div className="pt-3">
                <label className="ms-3 text-secondary">Website</label>
                <textarea value={newProfile.website}
                          className="form-control border-1"
                          onChange={(event) => {
                              const value = event.target.value;
                              const newP = {
                                  ...userProfile,
                                  website: value,
                              };
                              setNewProfile(newP);
                          }
                          }>
               </textarea>
            </div>
            <div className="pt-3">
                <label className="ms-3 text-secondary">Birthdate</label><br/>
                <input type="date" value={newProfile.dateOfBirth}
                       onChange={(event) => {
                           const value = event.target.value;
                           const newP = {
                               ...userProfile,
                               dateOfBirth: value,
                           };
                           setNewProfile(newP);
                       }
                }/>
            </div>
            <div className="pt-3">
                Switch to professional
            </div>
        </>
    );
};
export default EditProfile;