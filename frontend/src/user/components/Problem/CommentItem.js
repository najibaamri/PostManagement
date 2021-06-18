/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import FormInput from "./FormInput";
import UpdateComment from "./UpdateComment";

let showComments = [];
let userconnected = "60b02427f8baee267cd980a9";

function CommentItem({ comment, socket }) {
  const [reply, setreply] = useState(false);
  const [name, setname] = useState("");
  const [replyComment, setreplyComment] = useState([]);
  const [hideReplyComment, setHideReplyComment] = useState([]);
  const [next, setnext] = useState(3);
  const [allowDelete, setallowDelete] = useState(false);
  const [openPopup, setopenPopup] = useState(false);
  const [isVoted, setisVoted] = useState(false);
  const [votes, setvotes] = useState(comment.votes.length);

  const deleteComment = (commToDelete) => {
    socket.emit("deleteComment", commToDelete);
  };

  useEffect(() => {
    if (comment.username._id === userconnected) {
      setallowDelete(true);
    }
  }, [comment.username]);

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

  const voteComment = (id, username) => {
    const msg = { id, username };
    socket.emit("voteComment", msg);
    if (socket) {
      socket.on("commentVoted", (msg) => {
        setisVoted(true);
        setvotes(votes + 1);
      });
      return () => socket.off("commentVoted");
    }
  };

  useEffect(() => {
    if (comment.votes.includes(userconnected)) {
      setisVoted(true);
    }
  }, [comment.votes]);

  const deleteVote = (id, username) => {
    const msg = { id, username };
    socket.emit("unvoteComment", msg);
    if (socket) {
      socket.on("commentUnvoted", (msg) => {
        setisVoted(false);
        setvotes(votes - 1);
      });
      return () => socket.off("commentUnvoted");
    }
  };

  return (
    <>
      <CommentCard comment={comment}>
        <div className="nav_comment">
          <p onClick={() => handleReply(comment.username.username)}>Reply</p>

          {hideReplyComment > 0 && <p onClick={loadMore}>Load more {hideReplyComment} comments</p>}

          <p onClick={hideReply}>Hide Reply</p>
          <p> {votes} Votes </p>
          {!isVoted && (
            <button onClick={() => voteComment(comment._id, userconnected)} class="text-grey-600">
              <i class="uil-heart"></i> Vote{" "}
            </button>
          )}
          {isVoted && (
            <button
              onClick={() => {
                deleteVote(comment._id, userconnected);
              }}
              class="text-red-600"
            >
              <i class="uil-heart"></i> Voted{" "}
            </button>
          )}

          {allowDelete && (
            <button
              class="flex items-center px-3 py-2 text-red-500  hover:text-red-500 rounded-md "
              onClick={() => deleteComment(comment)}
            >
              <i class="uil-trash-alt mr-1"></i>
              Delete{" "}
            </button>
          )}
          {allowDelete && (
            <button
              class="flex items-center px-3 py-2  hover:text-blue-800 rounded-md "
              onClick={() => setopenPopup(true)}
            >
              <i class="uil-edit-alt mr-1"></i> Edit
            </button>
          )}
          <UpdateComment
            comment={comment}
            openPopup={openPopup}
            setopenPopup={setopenPopup}
            socket={socket}
          ></UpdateComment>
        </div>
        <div className="reply_comment">
          {replyComment.map((rep) => (
            <CommentCard comment={rep} key={rep._id}>
              <div className="nav_comment">
                <p onClick={() => handleReply(rep.username.username)}>Reply</p>
              </div>
            </CommentCard>
          ))}
        </div>
        {reply && (
          <FormInput
            id={comment._id}
            socket={socket}
            name={name}
            setreply={setreply}
            send="replyComment"
          />
        )}
      </CommentCard>
    </>
  );
}

export default CommentItem;
