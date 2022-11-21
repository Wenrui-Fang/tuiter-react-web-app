import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import {Route, Routes} from "react-router";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import homePostsReducer from "./tuits/home-post-reducer";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import profileReducer from "./tuits/profile-reducer";
import ProfileComponent from "./tuits/profile-component";
import EditProfile from "./tuits/edit-profile";

const store = configureStore({
    reducer: {who: whoReducer, tuitsData: tuitsReducer, homePostsData: homePostsReducer, profile: profileReducer}
});

function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route index element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="profile" element={<ProfileComponent/>}/>
                        <Route path="edit-profile" element={<EditProfile/>}/>
                    </Routes>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
}


export default Tuiter