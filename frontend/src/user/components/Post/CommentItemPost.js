/* eslint-disable jsx-a11y/anchor-is-valid */
import moment from "moment";
import React, { useEffect, useState } from "react";
import CommentCardPost from "./CommentCardPost";
import FormInputComment from "./FormInputComment";

let showComments = [];
let connecteduser = "60b02427f8baee267cd980a9";

export default function CommentItemPost({ comment, socket, showCommentss }) {
  const [reply, setreply] = useState(false);
  const [name, setname] = useState("");
  const [replyComment, setreplyComment] = useState([]);
  const [hideReplyComment, setHideReplyComment] = useState([]);
  const [next, setnext] = useState(3);
  const [isLiked, setisLiked] = useState(false);
  const [likes, setlikes] = useState(comment.votes.length);

  const loadMore = () => {
    //loopWithSlice(next);
    setnext(next + 3);
  };
  useEffect(() => {
    const loopWithSlice = () => {
      let start = comment.reply.length - next < 0 ? 0 : comment.reply.length - next;
      showComments = comment.reply.slice(start, comment.reply.length);
      setHideReplyComment(start);
      setreplyComment(showComments);
      console.log(showComments);
    };

    loopWithSlice(next);
  }, [comment.reply, next]);

  const handleReply = (username) => {
    setreply(true);
    setname(username);
    console.log(name);
  };

  const hideReply = () => {
    setreply(false);
    setnext(3);
  };

  const likeComment = (id, username) => {
    const msg = { id, username };
    socket.emit("voteComment", msg);
    if (socket) {
      socket.on("commentVoted", (msg) => {
        setisLiked(true);
        setlikes(likes + 1);
      });
      return () => socket.off("commentVoted");
    }
  };

  useEffect(() => {
    if (comment.votes.includes(connecteduser)) {
      setisLiked(true);
    }
  }, [comment.votes]);

  const deleteLike = (id, username) => {
    const msg = { id, username };
    socket.emit("unvoteComment", msg);
    if (socket) {
      socket.on("commentUnvoted", (msg) => {
        setisLiked(false);
        setlikes(likes - 1);
      });
      return () => socket.off("commentUnvoted");
    }
  };

  return (
    <>
      <div class="flex">
        <CommentCardPost comment={comment} socket={socket}>
          <div
            class="text-sm flex items-center space-x-3 mt-2 ml-5"
            style={{ marginBottom: "10px" }}
          >
            {!isLiked && (
              <button
                onClick={() => likeComment(comment._id, connecteduser)}
                class="text-black-600"
              >
                <i class="uil-heart"></i> Like{" "}
              </button>
            )}
            {isLiked && (
              <button onClick={() => deleteLike(comment._id, connecteduser)} class="text-red-600">
                <i class="uil-heart"></i> Unlike{" "}
              </button>
            )}

            <a> {likes} Likes</a>

            {showCommentss && <a onClick={() => handleReply(comment.username.username)}>Reply</a>}
            {hideReplyComment > 0 && (
              <a onClick={loadMore}>Load more {hideReplyComment} comments</a>
            )}

            {showCommentss && <a onClick={hideReply}>Hide Reply</a>}
            <a style={{ color: "grey" }}> {moment(comment.createdAt).fromNow()} </a>
          </div>

          <div>
            {replyComment.map((rep) => (
              <div class="flex">
                <CommentCardPost comment={rep} key={rep._id}>
                  <div
                    class="text-sm flex items-center space-x-3 mt-2 ml-5"
                    style={{ marginBottom: "5px", marginTop: "0px" }}
                  >
                    {showCommentss && (
                      <a onClick={() => handleReply(rep.username.username)}>Reply</a>
                    )}
                  </div>
                </CommentCardPost>
              </div>
            ))}
          </div>
          {reply && showCommentss && (
            <FormInputComment
              id={comment._id}
              socket={socket}
              name={name}
              setreply={setreply}
              send="replyComment"
            />
          )}
        </CommentCardPost>
      </div>
    </>
  );
}
