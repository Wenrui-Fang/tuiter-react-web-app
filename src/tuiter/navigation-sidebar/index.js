import React from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <Link to="/" className="list-group-item">
                Labs
            </Link>

            <div className="list-group-item list-group-item-action">
                <i className="bi bi-twitter"></i>
            </div>

            <div className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`}>
                <Link to="/tuiter/home" className="text-decoration-none text-black">
                    <div className="row">
                        <div className="col-2">
                            <i className="bi bi-house-fill"></i>
                        </div>
                        <div className="col-10">
                            <span className="d-none d-xl-block">Home</span>
                        </div>
                    </div>
                </Link>
            </div>

            <div className={`list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}`}>
                <Link to="/tuiter/explore" className="text-decoration-none text-black">
                    <div className="row">
                        <div className="col-2">
                            <i className="bi bi-hash"></i>
                        </div>
                        <div className="col-10">
                            <span className="d-none d-xl-block">Explore</span>
                        </div>
                    </div>
                </Link>
            </div>

            <div className={`list-group-item list-group-item-action ${active === 'notifications' ? 'active' : ''}`}>
                <a className="text-decoration-none text-black" href="#">
                    <div className="row">
                        <div className="col-2">
                            <i className="bi bi-bell-fill"></i>
                        </div>
                        <div className="col-10">
                            <span className="d-none d-xl-block">Notifications</span>
                        </div>
                    </div>
                </a>
            </div>

            <div className={`list-group-item list-group-item-action ${active === 'messages' ? 'active' : ''}`}>
                <a className="text-decoration-none text-black" href="#">
                    <div className="row">
                        <div className="col-2">
                            <i className="bi bi-envelope-fill"></i>
                        </div>
                        <div className="col-10">
                            <span className="d-none d-xl-block">Messages</span>
                        </div>
                    </div>
                </a>
            </div>

            <div className={`list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}`}>
                <a className="text-decoration-none text-black" href="#">
                    <div className="row">
                        <div className="col-2">
                            <i className="bi bi-bookmarks-fill"></i>
                        </div>
                        <div className="col-10">
                            <span className="d-none d-xl-block">Bookmarks</span>
                        </div>
                    </div>
                </a>
            </div>

            <div className={`list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}`}>
                <a className="text-decoration-none text-black" href="#">
                    <div className="row">
                        <div className="col-2">
                            <i className="bi bi-list-ul"></i>
                        </div>
                        <div className="col-10">
                            <span className="d-none d-xl-block">Lists</span>
                        </div>
                    </div>
                </a>
            </div>

            <div className={`list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}`}>
                <a className="text-decoration-none text-black" href="#">
                    <div className="row">
                        <div className="col-2">
                            <i className="bi bi-person-fill"></i>
                        </div>
                        <div className="col-10">
                            <span className="d-none d-xl-block">Profile</span>
                        </div>
                    </div>
                </a>
            </div>

            <div className={`list-group-item list-group-item-action ${active === 'more' ? 'active' : ''}`}>
                <a className="text-decoration-none text-black" href="#">
                    <div className="row">
                        <div className="col-2">
                            <i className="bi bi-three-dots"></i>
                        </div>
                        <div className="col-10">
                            <span className="d-none d-xl-block">More</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};
export default NavigationSidebar;