import React from "react";

const TuitStats = ({post}) => {
    return (
        <div className="row mt-2">
            <div className="col-3 text-secondary">
                <i className="bi bi-chat pe-2"></i>
                {post.replies}
            </div>
            <div className="col-3 text-secondary">
                <i className="bi bi-arrow-clockwise pe-2"></i>
                {post.retuits}
            </div>
            <div className="col-3 text-secondary">
                <i className={`${post.liked === true? 'bi bi-heart-fill pe-2 text-danger' : 'bi bi-heart pe-2'}`}></i>
                {post.likes}
            </div>
            <div className="col-3 text-secondary">
                <i className="bi bi-upload pe-2"></i>
            </div>
        </div>
    )
}

export default TuitStats;