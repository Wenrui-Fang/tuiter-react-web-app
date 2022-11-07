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
                <input value={newProfile.name}
                          className="form-control border-1"
                          onChange={(event) => {
                              const value = event.target.value;
                              const newP = {
                                  ...newProfile,
                                  name: value,
                              };
                              setNewProfile(newP);
                          }
                          }>
               </input>
            </div>
            <div className="pt-3">
                <label className="ms-3 text-secondary">Bio</label>
                <textarea value={newProfile.bio}
                          className="form-control border-1"
                          onChange={(event) => {
                              const value = event.target.value;
                              const newP = {
                                  ...newProfile,
                                  bio: value,
                              };
                              setNewProfile(newP);
                          }
                          }>
               </textarea>
            </div>
            <div className="pt-3">
                <label className="ms-3 text-secondary">Location</label>
                <input value={newProfile.location}
                          className="form-control border-1"
                          onChange={(event) => {
                              const value = event.target.value;
                              const newP = {
                                  ...newProfile,
                                  location: value,
                              };
                              setNewProfile(newP);
                          }
                          }>
               </input>
            </div>
            <div className="pt-3">
                <input value={newProfile.website}
                          placeholder="Website"
                          className="form-control border-1"
                          onChange={(event) => {
                              const value = event.target.value;
                              const newP = {
                                  ...newProfile,
                                  website: value,
                              };
                              setNewProfile(newP);
                          }
                          }>
               </input>
            </div>
            <div className="pt-3">
                <label className="ms-3 text-secondary">Birthdate</label><br/>
                <input type="date" value={newProfile.dateOfBirth}
                       onChange={(event) => {
                           const value = event.target.value;
                           const newP = {
                               ...newProfile,
                               dateOfBirth: value,
                           };
                           setNewProfile(newP);
                       }
                }/>
            </div>
            <div className="pt-3">
                Switch to professional
                <i className="bi bi-caret-right float-end"></i>
            </div>
        </>
    );
};
export default EditProfile;