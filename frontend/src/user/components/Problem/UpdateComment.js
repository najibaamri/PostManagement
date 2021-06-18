/* eslint-disable jsx-a11y/alt-text */
import React, { useRef } from "react";
import { Dialog } from "@material-ui/core";

function UpdateComment({ openPopup, setopenPopup, comment = {}, socket }) {
  console.log("description: " + comment.description);
  const contentRef = useRef();

  const commentSubmit = () => {
    const description = contentRef.current.value;

    const updatedAt = new Date().toISOString();
    socket.emit("updateComment", {
      _id: comment._id,
      username: comment.username._id,
      description,
      post_id: comment.post_id,
      updatedAt,
      reply: comment.reply,
    });
    setopenPopup(false);
  };
  return (
    <Dialog open={openPopup}>
      <div
        class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical rounded-lg p-0 lg:w-5/12 relative shadow-2xl uk-animation-slide-bottom-small"
        style={{ width: "1024px" }}
      >
        <div class="text-center py-4 border-b">
          <h3 class="text-lg font-semibold"> Modify You Comment </h3>
          <button
            class="uk-modal-close-default bg-gray-100 rounded-full p-2.5 m-1 right-2"
            type="button"
            uk-close
            uk-tooltip="title: Close ; pos: bottom ;offset:7"
            onClick={() => setopenPopup(false)}
          ></button>
        </div>
        <div class=" items-start space-x-4 p-5">
          <div className="row">
            <img
              src={comment.username.profilePicture}
              class="bg-gray-200 border border-white rounded-full w-11 h-11"
            />

            <strong> {comment.username.username} </strong>
          </div>

          <input
            contentEditable="true"
            defaultValue={comment.description}
            onChange={(e) => e.target.value}
            type="textarea"
            ref={contentRef}
            style={{ height: "100px", border: "1px solid #ccc", outline: "none" }}
          ></input>
          <button onClick={() => commentSubmit()}>Save</button>
        </div>
      </div>
    </Dialog>
  );
}

export default UpdateComment;
