import moment from "moment";
import React, { useEffect } from "react";
import "./CommentCard.css";

function CommentCard({ children, comment }) {
  console.log(comment.username.username);

  useEffect(() => {
    console.log(comment.username.username);
  }, [comment.username.username]);

  return (
    <div className="comment_card">
      <div className="comment_card_row">
        <h4>{comment?.username.username}</h4>
      </div>
      <span>{moment(comment.createdAt).fromNow()}</span>

      <span>{new Date(comment.createdAt).toLocaleString()}</span>

      <p dangerouslySetInnerHTML={{ __html: comment.description }} />
      {children}
    </div>
  );
}

export default CommentCard;
