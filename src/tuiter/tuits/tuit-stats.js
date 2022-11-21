import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = ({post}) => {
    const dispatch = useDispatch();
    return (
        <div className="row mt-2">
            <div className="col-2 text-secondary">
                <i className="bi bi-chat pe-2"></i>
                {post.replies}
            </div>
            <div className="col-3 text-secondary">
                <i className="bi bi-arrow-clockwise pe-2"></i>
                {post.retuits}
            </div>
            <div className="col-3 text-secondary">
                {post.liked && <i className="bi bi-heart-fill pe-2 text-danger"
                                  onClick={() => dispatch(updateTuitThunk({
                                      ...post,
                                      liked: false,
                                      likes: post.likes - 1
                                  }))}>
                </i>
                }
                {!post.liked && <i className="bi bi-heart-fill pe-2"
                                   onClick={() => dispatch(updateTuitThunk({
                                       ...post,
                                       liked: true,
                                       likes: post.likes + 1
                                   }))}>
                </i>
                }
                {post.likes}
            </div>
            <div className="col-3 text-secondary">
                {post.disliked && <i className="bi bi-hand-thumbs-down-fill pe-2 text-danger"
                                  onClick={() => dispatch(updateTuitThunk({
                                      ...post,
                                      disliked: false,
                                      dislikes: post.dislikes - 1
                                  }))}>
                </i>
                }
                {!post.disliked && <i className="bi bi-hand-thumbs-down-fill pe-2"
                                   onClick={() => dispatch(updateTuitThunk({
                                       ...post,
                                       disliked: true,
                                       dislikes: post.dislikes + 1
                                   }))}>
                </i>
                }
                {post.dislikes}
            </div>
            <div className="col-1 text-secondary">
                <i className="bi bi-upload pe-2"></i>
            </div>
        </div>
    )
}

export default TuitStats;