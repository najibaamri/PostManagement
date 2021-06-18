/* eslint-disable jsx-a11y/alt-text */

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Moment from "react-moment";
import FormInputComment from "./FormInputComment";
import io from "socket.io-client";
import CommentItemPost from "./CommentItemPost";

import { useDispatch } from "react-redux";
import { deletePost, getPosts } from "../../../redux/actions/postAction";
import "./postItem.css";
import EditPostPopup from "./EditPostPopup";
import ReactPlayer from "react-player";
import ListReactions from "./ListReactions";
import { FacebookButton } from "react-social";
import { Link } from "react-router-dom";

let username = "607e1c25b6e3422b40b74213";
let userconnected = "60b02427f8baee267cd980a9";
/* eslint-disable jsx-a11y/anchor-is-valid */
export default function PostItem({ post, key }) {
  const [socket, setSocket] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setloading] = useState(false);
  const [nbComments, setnbComments] = useState(0);
  const [moreComments, setmoreComments] = useState(0);
  const [page, setPage] = useState(1);
  const [next, setnext] = useState(3);
  const pageEnd = useRef();
  const [openPopup, setopenPopup] = useState(false);
  const [showComments, setshowComments] = useState(true);
  const [showReactions, setshowReactions] = useState(false);
  const [nbReact, setnbReact] = useState(0);
  const [reacted, setreacted] = useState(false);
  const [openPopupReact, setopenPopupReact] = useState(false);
  const [liketext, setliketext] = useState("Like");

  const dispatch = useDispatch();
  useEffect(() => {
    setloading(true);
    axios
      .get("http://localhost:5000/pi/commentRoute/comment/" + post._id + "?limit=" + page * 3)
      .then((res) => {
        setComments(res.data.comments);
        setloading(false);
        console.log(res.data.comments);
        setmoreComments(nbComments - 3);
      })
      .catch((err) => console.log(err.response.data.msg));
    axios.get("http://localhost:5000/pi/commentRoute/nbcomment/" + post._id).then((res) => {
      setnbComments(res.data.nbcomments);
    });
    const socket = io.connect("http://localhost:5000");
    setSocket(socket);

    return () => socket.close();
  }, [post._id, page, nbComments]);

  // RealTime
  useEffect(() => {
    if (socket) {
      socket.emit("joinRoom", post._id);
    }
  }, [socket, post._id]);

  useEffect(() => {
    if (socket) {
      socket.on("sendCommentToClient", (msg) => {
        setComments([msg, ...comments]);
        console.log(msg);
        setnbComments(nbComments + 1);
      });
      return () => socket.off("sendCommentToClient");
    }
  }, [socket, comments, nbComments]);

  //reply comments

  useEffect(() => {
    if (socket) {
      socket.on("sendReplyCommentToClient", (msg) => {
        console.log(msg);
        const newArr = [...comments];
        newArr.forEach((cm) => {
          if (cm._id === msg._id) {
            cm.reply = msg.reply;
          }
        });
        setComments(newArr);
      });
      return () => socket.off("sendReplyCommentToClient");
    }
  }, [socket, comments]);

  //comment Update
  useEffect(() => {
    if (socket) {
      socket.on("commentUpdated", (msg) => {
        //setComments([msg, ...comments]);
        console.log("after updating: " + msg);
        axios
          .get("http://localhost:5000/pi/commentRoute/comment/" + post._id + "?limit=" + page * 3)
          .then((res) => {
            setComments(res.data.comments);
            setloading(false);
          });
      });
      return () => socket.off("commentUpdated");
    }
  }, [socket, comments, page, post._id]);

  //comment Delete
  useEffect(() => {
    if (socket) {
      socket.on("commentDeleted", (msg) => {
        //setComments([msg, ...comments]);
        axios
          .get("http://localhost:5000/pi/commentRoute/comment/" + post._id + "?limit=" + page * 3)
          .then((res) => {
            setComments(res.data.comments);
            setloading(false);
            setnbComments(nbComments - 1);
          });
        console.log(msg);
      });
      return () => socket.off("commentDeleted");
    }
  }, [socket, comments, page, post._id, nbComments]);

  const loadMore = () => {
    //loopWithSlice(next);
    setPage((prev) => prev + 1);
    setmoreComments(comments.length - 3);
  };

  // Add Reaction
  const addReaction = (name, image) => {
    const post_id = post._id;

    const reaction = { name, image, post_id, userconnected };
    axios.post("http://localhost:5000/pi/reactRoute/react", reaction);

    setshowReactions(false);
    axios
      .get("http://localhost:5000/pi/reactRoute/nbreact/" + post._id)
      .then((res) => setnbReact(res.data.result));
    setreacted(true);
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/pi/reactRoute/nbreact/" + post._id)
      .then((res) => setnbReact(res.data.result));
  }, [post._id]);
  console.log(nbReact);

  const upload = "https://res.cloudinary.com/dojrd5swn/image/upload/" + post.image || null;

  //Delete Reaction
  const deleteReact = (postid, username) => {
    axios.delete("http://localhost:5000/pi/reactRoute/reactone/" + postid + "/" + userconnected);
    setreacted(false);
    setnbReact(nbReact - 1);
  };

  // Delete
  const onDelete = (id) => {
    dispatch(deletePost(id));
    dispatch(getPosts());
  };

  const [showVideo, setshowVideo] = useState(false);
  useEffect(() => {
    if (post.image?.endsWith("mp4")) {
      setshowVideo(true);
    }
  }, [post.image]);

  const [youtube, setyoutube] = useState(false);
  const [dailyMotion, setdailyMotion] = useState(false);
  useEffect(() => {
    if (post.description?.includes("https://www.youtube.com/watch?")) {
      setyoutube(true);
    }
    if (post.description?.includes("https://www.dailymotion.com")) {
      setdailyMotion(true);
    }
  }, [post.description]);

  //check connected user

  const [allowEdit, setallowEdit] = useState(false);
  useEffect(() => {
    if (post.username._id === userconnected) {
      setallowEdit(true);
    }
  }, [post.username]);

  //share on facebook
  let url = "https://res.cloudinary.com/dojrd5swn/image/upload/" + post.image;
  let appId = "818960815377406";
  return (
    <>
      <div class="bg-white shadow border border-gray-100 rounded-lg dark:bg-gray-900 lg:mx-0 uk-animation-slide-bottom-small">
        <div class="flex justify-between items-center lg:p-4 p-2.5">
          <div class="flex flex-1 items-center space-x-4">
            <a href="#">
              <img
                src={post.username.profilePicture}
                class="bg-gray-200 border border-white rounded-full w-10 h-10"
              />
            </a>
            <div class="flex-1 font-semibold capitalize">
              <a href="#" class="text-black">
                {post.username.username}
              </a>
              <div class="text-gray-700 flex items-center space-x-2">
                <Moment fromNow>{post.createdAt}</Moment>
                <ion-icon name="people"></ion-icon>
              </div>
            </div>
          </div>

          {allowEdit && (
            <div>
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
                      <i class="uil-edit-alt mr-1"></i> Edit Post
                    </a>
                  </li>
                  {showComments && (
                    <li>
                      <a
                        class="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800"
                        onClick={() => setshowComments(false)}
                      >
                        <i class="uil-comment-slash mr-1"></i> Disable comments
                      </a>
                    </li>
                  )}
                  {!showComments && (
                    <li>
                      <a
                        class="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800"
                        onClick={() => setshowComments(true)}
                      >
                        <i class="uil-comment mr-1"></i> Enable comments
                      </a>
                    </li>
                  )}

                  <li>
                    <hr class="-mx-2 my-2 dark:border-gray-800"></hr>
                  </li>
                  <li>
                    <button
                      onClick={() => onDelete(post._id)}
                      class="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600"
                    >
                      <i class="uil-trash-alt mr-1"></i> Delete
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div class="p-3 border-b dark:border-gray-700">{post.description}</div>
        <div uk-lightbox>
          <a href="assets/user/images/avatars/avatar-lg-3.jpg">
            <img src={upload} alt="" class="max-h-96 w-full object-cover" />
            {showVideo && (
              <video controls>
                <source src={upload} type="video/mp4"></source>
              </video>
            )}
            {(youtube || dailyMotion) && (
              <ReactPlayer
                url={post.description}
                controls={true}
                width="100%"
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 },
                  },

                  dailymotion: {},
                }}
              />
            )}
            )
          </a>
        </div>
        {showReactions && (
          <div className="reactions">
            <a
              className="emoji"
              onClick={() => {
                addReaction("Like", "like.gif");
                setliketext("Like");
              }}
            >
              <img src="assets/user/images/post/like.gif" />
              <p>Like</p>
            </a>
            <a
              className="emoji"
              onClick={() => {
                addReaction("Love", "love.gif");
                setliketext("Love");
              }}
            >
              <img src="assets/user/images/post/love.gif" />
              <p>Love</p>
            </a>

            <a
              className="emoji"
              onClick={() => {
                addReaction("Haha", "laugh.gif");
                setliketext("Haha");
              }}
            >
              <img src="assets/user/images/post/laugh.gif" />
              <p>Haha</p>
            </a>
            <a
              className="emoji"
              onClick={() => {
                addReaction("Wow", "wow.gif");
                setliketext("Wow");
              }}
            >
              <img src="assets/user/images/post/wow.gif" />
              <p>Wow</p>
            </a>
            <a
              className="emoji"
              onClick={() => {
                addReaction("Sad", "sad.gif");
                setliketext("Sad");
              }}
            >
              <img src="assets/user/images/post/sad.gif" />
              <p>Sad</p>
            </a>
            <a
              className="emoji"
              onClick={() => {
                addReaction("Angry", "angry.gif");
                setliketext("Angry");
              }}
            >
              <img src="assets/user/images/post/angry.gif" />
              <p>Angry</p>
            </a>
          </div>
        )}
        <div class="p-4 space-y-3">
          <div class="flex space-x-4 lg:font-bold">
            {!reacted && (
              <a
                onMouseEnter={() => {
                  setshowReactions(true);
                }}
                onMouseLeave={() => {
                  setTimeout(() => setshowReactions(false), 4000);
                }}
                style={{ cursor: "pointer" }}
                class="flex items-center space-x-2"
              >
                <div class="p-2 rounded-full text-black lg:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width="22"
                    height="22"
                    class="dark:text-gray-100"
                  >
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                </div>
                <div> Like</div>
              </a>
            )}
            {reacted && (
              <a
                onClick={() => {
                  deleteReact(post._id, userconnected);
                }}
                style={{ cursor: "pointer" }}
                class="flex items-center space-x-2"
              >
                <div class="p-2 rounded-full text-black lg:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width="22"
                    height="22"
                    class="dark:text-gray-100"
                  >
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                </div>

                <div style={{ color: "#EF4444" }}> {liketext}</div>
              </a>
            )}

            <a class="flex items-center space-x-2">
              <div class="p-2 rounded-full text-black lg:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width="22"
                  height="22"
                  class="dark:text-gray-100"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div> Comment</div>
            </a>

            <a class="flex items-center space-x-2 flex-1 justify-end">
              <div class="p-2 rounded-full text-black lg:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width="22"
                  height="22"
                  class="dark:text-gray-100"
                >
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
              </div>
              <FacebookButton url={url} appId={appId}>
                Share
              </FacebookButton>
            </a>
          </div>
          <div class="flex items-center space-x-3 pt-2">
            <div class="flex items-center">
              <img
                src="assets/user/images/avatars/avatar-1.jpg"
                alt=""
                class="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900"
              />
              <img
                src="assets/user/images/post/avatar-4.jpg"
                alt=""
                class="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2"
              />
              <img
                src="assets/user/images/avatars/avatar-2.jpg"
                alt=""
                class="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2"
              />
            </div>
            <div class="dark:text-gray-100">
              {nbReact} <strong> </strong>
              <button onClick={() => setopenPopupReact(true)}>
                {" "}
                <strong> Likes </strong>
              </button>
              {"    |    "}
              <strong>{nbComments} </strong>
              comments
            </div>
          </div>

          <div class="border-t py-4 space-y-4 dark:border-gray-600">
            {comments.map((comment) => (
              <CommentItemPost
                showCommentss={showComments}
                key={comment._id}
                comment={comment}
                socket={socket}
              />
            ))}
          </div>
          {loading && <div className="loading"></div>}
          {nbComments - comments.length > 0 && (
            <a onClick={loadMore} class="hover:text-blue-600 hover:underline">
              View {nbComments - comments.length} more Comments
            </a>
          )}

          {showComments && <FormInputComment id={post._id} socket={socket}></FormInputComment>}
        </div>
      </div>
      <ListReactions
        id={post._id}
        openPopup={openPopupReact}
        setopenPopup={setopenPopupReact}
      ></ListReactions>

      <EditPostPopup openPopup={openPopup} post={post} setopenPopup={setopenPopup}></EditPostPopup>
    </>
  );
}
