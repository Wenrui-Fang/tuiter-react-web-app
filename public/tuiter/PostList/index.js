import posts from "../PostList/HomePosts.js";
import PostItem from "./PostItem.js";

const PostItems = () => {
    return (`
            <ul class="list-group wd-border-main">
                ${posts.map(post => {
                        return PostItem(post);
                    }).join('')
                }
            </ul>
    `)
}

export default PostItems;