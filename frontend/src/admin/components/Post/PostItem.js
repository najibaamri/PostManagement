/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import { useDispatch } from "react-redux";
import { deletePost, getPosts } from "../../../redux/actions/postAction";

function PostItem({ post, key }) {
  const dispatch = useDispatch();
  const deletePostd = (id) => {
    dispatch(deletePost(id));
    dispatch(getPosts());
  };

  const upload = "https://res.cloudinary.com/dojrd5swn/image/upload/" + post.image || null;
  return (
    <>
      <tr>
        <td> {post.username.username} </td>

        <td>{post.description}</td>
        <td>
          {" "}
          <img src={upload}></img>{" "}
        </td>
        <td style={{ display: "flex" }}>
          <button
            data-toggle="tooltip"
            title="Trash"
            class="pd-setting-ed"
            onClick={() => {
              if (window.confirm("Are you sure you wish to delete this item?"))
                deletePostd(post._id);
            }}
          >
            <i class="fa fa-trash-o" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    </>
  );
}

export default PostItem;
