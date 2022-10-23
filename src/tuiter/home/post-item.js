import React from "react";

const PostItem = (
    {
        post = {
            "avatarIcon": "../../images/spaceship.jpeg",
            "userName": "Elon Musk",
            "handle": "elonmusk",
            "time": "23h",
            "topic": "Amazing show about @Inspiration4x mission",
            "image": "../../images/inspiration.jpeg",
            "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "context": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ... netflix.com",
            "comment": "4.2K",
            "retweet": "3.5K",
            "love": "37.5K"
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row mt-2">
                <div className="col-2">
                    <img className="rounded-circle" src={post.avatarIcon} width={60} height={60}/>
                </div>
                <div className="col-10">
                    <div className="fw-bolder">
                        {post.userName}
                        <i className="bi bi-check-circle-fill ps-2 pe-2 text-primary"></i>
                        <span className="text-secondary">@{post.handle} · {post.time}</span>
                        <i className="bi bi-three-dots float-end mt-1"></i>
                        <p className="fw-normal">{post.topic}</p>
                    </div>
                    <div className="wd-border-main overflow-hidden wd-content-img-border">
                        <img width={504} height={300} src={post.image}/>
                    </div>
                    <div className="wd-border-main wd-content-img-text-border">
                        <div className="fw-bolder">{post.title}</div>
                        <p>{post.context}</p>
                    </div>
                    <div className="row mt-2">
                        <div className="col-3 text-secondary">
                            <i className="bi bi-chat pe-2"></i>
                            {post.comment}
                        </div>
                        <div className="col-3 text-secondary">
                            <i className="bi bi-arrow-clockwise pe-2"></i>
                            {post.retweet}
                        </div>
                        <div className="col-3 text-secondary">
                            <i className="bi bi-heart pe-2"></i>
                            {post.love}
                        </div>
                        <div className="col-3 text-secondary">
                            <i className="bi bi-upload pe-2"></i>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default PostItem;