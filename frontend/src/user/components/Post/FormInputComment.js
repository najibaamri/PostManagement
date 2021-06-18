import React, { useEffect, useRef } from "react";

export default function FormInputComment({ id, socket, setreply, send, name }) {
  let userconnected = "60b02427f8baee267cd980a9";
  const contentRef = useRef();
  const bouton = useRef();

  useEffect(() => {
    if (name) {
      contentRef.current.value = "@" + name;
    }
  }, [name]);

  const commentSubmit = () => {
    const username = userconnected;
    const description = contentRef.current.value;
    if (!username.trim()) return alert("not Empty");

    const createdAt = new Date().toISOString();
    socket.emit("createComment", {
      username,
      description,
      post_id: id,
      createdAt,
      send,
    });
    contentRef.current.value = "";
    if (setreply) setreply(false);
  };

  return (
    <div>
      <div class="bg-gray-100 rounded-full relative dark:bg-gray-800 border-t">
        <input
          placeholder="Add your Comment.."
          class="bg-transparent max-h-10 shadow-none px-5"
          ref={contentRef}
        ></input>
      </div>
      <button ref={bouton} onClick={commentSubmit}>
        Send
      </button>
    </div>
  );
}
