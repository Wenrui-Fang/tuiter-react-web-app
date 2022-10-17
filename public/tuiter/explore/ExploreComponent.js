import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
           <div class="row">
                <div class="col-9">
                    <div class="position-relative">
                        <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter">
                        <i class="fas fa-search position-absolute wd-search-tuiter-icon text-secondary"></i>
                    </div>
                </div>
                <div class="col-3">
                    <div class="position-relative">
                        <i class="position-absolute wd-search-cog-icon fas fa-cog text-primary fa-2x"></i>
                    </div>
                </div>
           </div>
           <ul class="nav nav-tabs mt-1">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="d-none d-md-block nav-link " href="#">Entertainment</a>
                </li>
            </ul>
            <div class="position-relative">
                <img src="../../images/starship.jpg" class="mt-1" width="100%"/>
                <h2 class="position-absolute bottom-0 start-0 text-white ps-2">SpaceX's Starship</h2>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
