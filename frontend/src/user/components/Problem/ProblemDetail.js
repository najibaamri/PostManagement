/* eslint-disable jsx-a11y/alt-text */

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Moment from "react-moment";
import FormInput from "./FormInput";
import io from "socket.io-client";
import CommentItem from "./CommentItem";
import Loading from "../Problem/loading.gif";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ProblemDetail(props) {
  const id = props.match.params.id;
  const [problemWanted, setproblemWanted] = useState([]);
  const [socket, setSocket] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setPage] = useState(1);
  const pageEnd = useRef();
  useEffect(() => {
    axios
      .get("http://localhost:5000/pi/postRoute/problemdetail/" + id)
      .then((res) => setproblemWanted(res.data.problem));
    const socket = io.connect("http://localhost:5000");
    setSocket(socket);
    return () => socket.close();
  }, [id]);
  //console.log(problemWanted);
  useEffect(() => {
    setloading(true);
    axios
      .get("http://localhost:5000/pi/commentRoute/comment/" + id + "?limit=" + page * 5)
      .then((res) => {
        setComments(res.data.comments);
        setloading(false);
      })
      .catch((err) => console.log(err));
  }, [id, page]);

  // RealTime
  useEffect(() => {
    if (socket) {
      socket.emit("joinRoom", id);
    }
  }, [socket, id]);

  useEffect(() => {
    if (socket) {
      socket.on("sendCommentToClient", (msg) => {
        setComments([msg, ...comments]);
        console.log(msg);
      });
      return () => socket.off("sendCommentToClient");
    }
  }, [socket, comments]);

  useEffect(() => {
    if (socket) {
      socket.on("commentDeleted", (msg) => {
        //setComments([msg, ...comments]);
        axios
          .get("http://localhost:5000/pi/commentRoute/comment/" + id + "?limit=" + page * 5)
          .then((res) => {
            setComments(res.data.comments);
            setloading(false);
          });
        console.log(msg);
      });
      return () => socket.off("commentDeleted");
    }
  }, [socket, comments, id, page]);

  useEffect(() => {
    if (socket) {
      socket.on("commentUpdated", (msg) => {
        //setComments([msg, ...comments]);
        console.log("after updating: " + msg);
        axios
          .get("http://localhost:5000/pi/commentRoute/comment/" + id + "?limit=" + page * 5)
          .then((res) => {
            setComments(res.data.comments);
            setloading(false);
          });
      });
      return () => socket.off("commentUpdated");
    }
  }, [socket, comments, id, page]);

  //infinity scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      {
        threshold: 0.1,
      }
    );
    observer.observe(pageEnd.current);
  }, []);

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

  return (
    <body>
      <div id="wrapper">
        {/*<!-- Main Contents -->*/}
        <div class="main_content">
          <div class="mcontainer">
            <div class="lg:flex lg:space-x-10">
              <div class="lg:w-3/4">
                <h1 class="lg:text-3xl text-2xl font-semibold mb-6">{problemWanted.title} </h1>

                <div class="flex items-center space-x-3 my-3 pb-4 border-b">
                  <img
                    src="assets/user/images/avatars/avatar-3.jpg"
                    alt=""
                    class="w-10 rounded-full"
                  />
                  <div>
                    <div class="text-base font-semibold"></div>
                    <div class="text-xs">
                      Published <Moment>{problemWanted.createdAt}</Moment>{" "}
                    </div>
                  </div>
                </div>

                <div class="space-y-3">
                  <p dangerouslySetInnerHTML={{ __html: problemWanted.description }}></p>
                </div>
                {/* <div class="h-44 mb-4 md:h-72 overflow-hidden relative rounded-lg w-full">
                  <img
                    src="assets/user/images/blog/img-1.jpg"
                    alt=""
                    class="w-full h-full absolute inset-0 object-cover"
                  />
  </div>*/}
                <FormInput id={id} socket={socket}></FormInput>
                <div className="comments_list">
                  {comments.map((comment) => (
                    <CommentItem key={comment._id} comment={comment} socket={socket} />
                  ))}
                </div>
                {loading && (
                  <div className="loading">
                    <img src={Loading} />
                  </div>
                )}
                <button ref={pageEnd} style={{ opacity: 0 }}>
                  Load More
                </button>
              </div>

              <div class="lg:w-1/4 w-full">
                <div uk-sticky="offset:100" class="uk-sticky">
                  <h2 class="text-2xl font-semibold mb-3"> Recently Posted </h2>
                  <ul>
                    <li>
                      <a href="#" class="hover:bg-gray-100 rounded-md p-2 -mx-2 block">
                        <h3 class="font-medium line-clamp-2">
                          Awesome Web Dev Tools and Resources For 2021
                        </h3>
                        <div class="flex items-center my-auto text-xs space-x-1.5">
                          <div> Sep 12, 2020</div> <div class="pb-1"> . </div>
                          <ion-icon name="chatbox-ellipses-outline"></ion-icon> <div> 23</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:bg-gray-100 rounded-md p-2 -mx-2 block">
                        <h3 class="font-medium line-clamp-2">
                          Awesome Web Dev Tools and Resources For 2021
                        </h3>
                        <div class="flex items-center my-auto text-xs space-x-1.5">
                          <div> Sep 12, 2020</div> <div class="pb-1"> . </div>
                          <ion-icon name="chatbox-ellipses-outline"></ion-icon> <div> 23</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:bg-gray-100 rounded-md p-2 -mx-2 block">
                        <h3 class="font-medium line-clamp-2">
                          Interesting JavaScript and CSS Libraries in 2021
                        </h3>
                        <div class="flex items-center my-auto text-xs space-x-1.5">
                          <div> Sep 12, 2020</div> <div class="pb-1"> . </div>
                          <ion-icon name="chatbox-ellipses-outline"></ion-icon> <div> 23</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:bg-gray-100 rounded-md p-2 -mx-2 block">
                        <h3 class="font-medium line-clamp-2">
                          Awesome Web Dev Tools and Resources For 2021
                        </h3>
                        <div class="flex items-center my-auto text-xs space-x-1.5">
                          <div> Sep 12, 2020</div> <div class="pb-1"> . </div>
                          <ion-icon name="chatbox-ellipses-outline"></ion-icon> <div> 23</div>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <br />

                  <h4 class="text-xl font-semibold mb-3"> Tags </h4>

                  <div class="flex flex-wrap gap-2">
                    <a href="#" class="bg-gray-100 py-1.5 px-4 rounded-full">
                      Computers
                    </a>
                    <a href="#" class="bg-gray-100 py-1.5 px-4 rounded-full">
                      Business
                    </a>
                    <a href="#" class="bg-gray-100 py-1.5 px-4 rounded-full">
                      News
                    </a>
                    <a href="#" class="bg-gray-100 py-1.5 px-4 rounded-full">
                      Architecher
                    </a>
                    <a href="#" class="bg-gray-100 py-1.5 px-4 rounded-full">
                      Technolgy
                    </a>
                    <a href="#" class="bg-gray-100 py-1.5 px-4 rounded-full">
                      Music
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
