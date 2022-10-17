import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return (`
        <div class="list-group">
            <div class="list-group-item list-group-item-action fw-bolder">
                Who to follow
            </div>
            ${who.map(person => {
                    return (WhoToFollowListItem(person));
                }).join('')
             }
        </div>
    `)
}


export default WhoToFollowList;

// $("#wd-who-to-follow-test").append(`
//     ${WhoToFollowList()}
// `);
