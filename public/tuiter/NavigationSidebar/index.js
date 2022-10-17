const NavigationSidebar = () => {
    return (`
            <div class="list-group">
                <div class="list-group-item list-group-item-action">
                    <i class="fab fa-twitter fa-1x"></i>
                </div>
                <div class="list-group-item list-group-item-action">
                    <a href="#" class="text-decoration-none text-white">
                        <div class="row">
                            <div class="col-2">
                                <i class="fas fa-home"></i>
                            </div>
                            <div class="col-10">
                                <span class="d-none d-xl-block">Home</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="list-group-item list-group-item-action active">
                    <a href="#" class="text-decoration-none text-white">
                        <div class="row">
                            <div class="col-2">
                                <i class="fas fa-hashtag"></i>
                            </div>
                            <div class="col-10">
                                <span class="d-none d-xl-block">Explore</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="list-group-item list-group-item-action">
                    <a href="#" class="text-decoration-none text-white">
                        <div class="row">
                            <div class="col-2">
                                <i class="fas fa-bell"></i>
                            </div>
                            <div class="col-10">
                                <span class="d-none d-xl-block">Notifications</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="list-group-item list-group-item-action">
                    <a href="#" class="text-decoration-none text-white">
                        <div class="row">
                            <div class="col-2">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="col-10">
                                <span class="d-none d-xl-block">Messages</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="list-group-item list-group-item-action">
                    <a href="#" class="text-decoration-none text-white">
                        <div class="row">
                            <div class="col-2">
                                <i class="fas fa-bookmark"></i>
                            </div>
                            <div class="col-10">
                                <span class="d-none d-xl-block">Bookmarks</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="list-group-item list-group-item-action">
                    <a href="#" class="text-decoration-none text-white">
                        <div class="row">
                            <div class="col-2">
                                <i class="fas fa-list"></i>
                            </div>
                            <div class="col-10">
                                <span class="d-none d-xl-block">Lists</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="list-group-item list-group-item-action">
                    <a href="#" class="text-decoration-none text-white">
                        <div class="row">
                            <div class="col-2">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="col-10">
                                <span class="d-none d-xl-block">Profile</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="list-group-item list-group-item-action">
                    <a href="#" class="text-decoration-none text-white">
                        <div class="row">
                            <div class="col-2">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                            <div class="col-10">
                                <span class="d-none d-xl-block">More</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <button class="btn btn-primary w-100 mt-1 rounded-pill">Tweet</button>

 `);
}
export default NavigationSidebar;


