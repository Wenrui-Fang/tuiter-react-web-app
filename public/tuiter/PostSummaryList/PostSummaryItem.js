const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-10">
                    <div class="text-secondary">
                        ${post.topic}
                    </div>
                    <div class="fw-bolder">
                        ${post.userName}
                        <i class="fa-solid fa-circle-check"></i>
                        <span class="text-secondary fw-normal">- ${post.time}</span>
                    </div>
                    <div class="fw-bolder">
                        ${post.title}
                    </div>
                    <div class="text-secondary">
                        ${post.tweets}
                    </div>
                </div>
                <div class="col-2">
                    <img class="float-end rounded-3" src=${post.image} width="80px" height="80px">
                </div>
            </div>
        </li>
    `)

}

export default PostSummaryItem;