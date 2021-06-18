/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import UpdateComment from "../Problem/UpdateComment";
const userconnected = "60b02427f8baee267cd980a9";

export default function CommentCardPost({ children, comment, socket }) {
  const [openPopup, setopenPopup] = useState(false);
  const [allow, setallow] = useState(false);

  const deleteComment = (commToDelete) => {
    socket.emit("deleteComment", commToDelete);
  };
  useEffect(() => {
    if (comment.username._id === userconnected) {
      setallow(true);
    }
  }, [comment.username._id]);

  return (
    <>
      <div class="w-10 h-10 rounded-full relative flex-shrink-0">
        <img
          src={comment.username.profilePicture}
          alt=""
          class="absolute h-full rounded-full w-full"
        />
      </div>

      <div>
        <div class="text-gray-700 py-2 px-3 rounded-md bg-gray-100 relative lg:ml-5 ml-2 lg:mr-12  dark:bg-gray-800 dark:text-gray-100">
          <p class="leading-6" style={{ marginBottom: "unset" }}>
            <strong>{comment.username.username}</strong> {comment.description}
            {allow && (
              <div style={{ float: "right" }}>
                <a href="#">
                  <i class="icon-feather-more-horizontal text-2xl hover:bg-gray-200 rounded-full p-2 transition -mr-1 dark:hover:bg-gray-700"></i>
                </a>
                <div
                  class="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500  text-base border border-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700"
                  uk-drop="mode: click;pos: bottom-right;animation: uk-animation-slide-bottom-small"
                >
                  <ul class="space-y-1">
                    <li>
                      <a
                        onClick={() => setopenPopup(true)}
                        class="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800"
                      >
                        <i class="uil-edit-alt mr-1"></i> Edit Comment
                      </a>
                    </li>
                    {openPopup && (
                      <UpdateComment
                        comment={comment}
                        openPopup={openPopup}
                        setopenPopup={setopenPopup}
                        socket={socket}
                      ></UpdateComment>
                    )}
                    <li>
                      <hr class="-mx-2 my-2 dark:border-gray-800"></hr>
                    </li>
                    <li>
                      <a
                        onClick={() => deleteComment(comment)}
                        class="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600"
                      >
                        <i class="uil-trash-alt mr-1"></i> Delete Comment
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </p>

          <div class="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800"></div>
        </div>

        {children}
      </div>
    </>
  );
}
