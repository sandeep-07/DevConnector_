import axios from "axios";
import { setAlert } from "./alert";
import {
  DELETE_POST,
  UPDATE_LIKES,
  GET_POSTS,
  POSTS_ERROR,
  POST_ERROR,
} from "./types";

// Get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts");

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add Like
export const addLike = (postId) => async (dispatch) => {
  try {
    const res = await axios.put(`api/posts/like/${postId}`);
    console.like(res.data);
    dispatch({
      type: UPDATE_LIKES,
      payload: { postId, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: { msg: err },
    });
  }
};
// Remove Like
export const removeLike = (postId) => async (dispatch) => {
  try {
    const res = await axios.put(`api/posts/unlike/${postId}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { postId, likes: res.data },
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: POSTS_ERROR,
      payload: { msg: err },
    });
  }
};

// Delete post
export const deletePost = (postId) => async (dispatch) => {
  try {
    const res = await axios.delete(`api/posts/${postId}`);

    dispatch({
      type: DELETE_POST,
      payload: { postId },
    });

    dispatch(setAlert("Post Removed", "success"));
  } catch (err) {
    console.log(err);
    dispatch({
      type: POSTS_ERROR,
      payload: { msg: err },
    });
  }
};
