import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addLike, deletePost, removeLike } from "../../actions/post";

const PostItem = ({ post }) => {
  const { _id, text, name, avatar, user, likes, comments, date } = post;
  //   const state = useSelector((state) => state);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [first, setfirst] = useState(0);
  return (
    <div>
      <div className="post bg-white p-1 my-1">
        <div>
          <a href="profile.html">
            <img className="round-img" src={avatar} alt="" />
            <h4>{name}</h4>
          </a>
        </div>
        <div>
          <p className="my-1">{text}</p>
          <p className="post-date">
            Posted on <Moment format="YYY/MM/DD">{date}</Moment>
          </p>
          {/* <button
            onClick={(e) => {
              dispatch(addLike(_id));
              setfirst(first + 1);
            }}
            type="button"
            className="btn btn-light"
          >
            <i className="fas fa-thumbs-up"></i>
            <span>{likes.length}</span>
          </button>
          <button
            onClick={(e) => {
              dispatch(removeLike(_id));
              setfirst(first + 1);
            }}
            type="button"
            className="btn btn-light"
          >
            <i className="fas fa-thumbs-down"></i>
          </button> */}
          <Link to={`/post/${_id}`} className="btn btn-primary">
            Discussion{" "}
            {comments.length > 0 && (
              <span className="comment-count">{comments.length}</span>
            )}
          </Link>
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={(e) => dispatch(deletePost(_id))}
              type="button"
              className="btn btn-danger"
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

PostItem.propTypes = {};

export default PostItem;
