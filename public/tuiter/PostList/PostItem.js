const PostItem = (post) => {
    return (`
        <li class="list-group-item bg-black">
            <div class="row mt-2">
                <div class="col-2">
                    <img class="rounded-circle" src=${post.avatarIcon} width="60px" height="60px">
                </div>
                <div class="col-10">
                    <div class="fw-bolder text-white">${post.userName}
                        <i class="fa-solid fa-circle-check"></i>
                        <span class="text-secondary">@${post.handle} · ${post.time}</span>
                        <i class="fas fa-ellipsis-h text-secondary float-end mt-1"></i>
                        <p class="fw-normal">${post.topic}</p>
                    </div>
                    <div class="wd-border-main overflow-hidden wd-content-img-border">
                        <img width="504px" height="300px" src=${post.image}>
                    </div>
                    <div class="wd-border-main wd-content-img-text-border">
                        ${post.title}
                        <p class="text-secondary">${post.context}</p>
                    </div>
                    <div class="row mt-2">
                        <div class="col-3 text-secondary">
                            <i class="fa-regular fa-comment pe-2"></i>
                            ${post.comment}
                        </div>
                        <div class="col-3 text-secondary">
                            <i class="fa-solid fa-retweet pe-2"></i>
                            ${post.retweet}
                        </div>
                        <div class="col-3 text-secondary">
                            <i class="fa-regular fa-heart pe-2"></i>
                            ${post.love}
                        </div>
                        <div class="col-3 text-secondary">
                            <i class="fa-solid fa-arrow-up-from-bracket pe-2"></i>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    `)
}

export default PostItem;