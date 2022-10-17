import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./posts.js"

// $('#wd-post-summary-test').append(`
//     ${PostSummaryItem(post)}
// `);

const PostSummaryList = () => {
    return (`
            <ul class="list-group wd-border-main">
                ${exploreItems.map(post => {
                        return PostSummaryItem(post);
                    }).join('')
                }           
            </ul>
    `)
}

export default PostSummaryList;