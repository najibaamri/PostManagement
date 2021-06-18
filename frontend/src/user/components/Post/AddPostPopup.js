/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import { Dialog } from "@material-ui/core";

import { createPost, getPosts, resetSaved } from "../../../redux/actions/postAction";
import { useDispatch, useSelector } from "react-redux";
import Picker from "emoji-picker-react";
import FormBody from "./FormBody";

function AddPostPopup(props) {
  const desc = useRef();

  const { openPopup, setopenPopup } = props;
  const dispatch = useDispatch();
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showEmoji, setshowEmoji] = useState(false);
  const [message, setmessage] = useState("");

  const onEmojiClick = (event, emojiObject) => {
    //const ref = desc.current;
    //ref.focus();
    setChosenEmoji(emojiObject);
    /*const start = message.substring(0, ref.selectionStart);
    const end = message.substring(ref.selectionStart);
    setmessage(start + chosenEmoji.emoji + end);*/
  };

  function handleFormSubmit(values, bag) {
    const formData = new FormData();
    Object.keys(values).forEach((key) => formData.append(key, values[key]));
    //axios.post("http://localhost:5000/pi/postRoute/post", formData);
    //this.bag = bag;
    dispatch(createPost(formData));
    console.log(values);
    setopenPopup(false);
  }

  const saved = useSelector((state) => state.postReducer.saved);
  useEffect(() => {
    if (saved) {
      dispatch(getPosts());
      dispatch(resetSaved());
    }
  }, [dispatch, saved]);

  return (
    <Dialog open={openPopup}>
      <FormBody onSubmit={handleFormSubmit} setopenPopup={setopenPopup} />
    </Dialog>
  );
}

export default AddPostPopup;
