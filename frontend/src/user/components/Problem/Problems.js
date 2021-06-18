/* eslint-disable no-unreachable */
/* eslint-disable jsx-a11y/alt-text */

import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTop6Contrib } from "../../../redux/actions/commentAction";
import { getProblemsByUser } from "../../../redux/actions/problemAction";
import ProblemItem from "./ProblemItem";
/* eslint-disable jsx-a11y/anchor-is-valid */

const userconnected = "60b02427f8baee267cd980a9";
export default function Problems() {
  const [problems, setproblems] = useState([]);
  const [show, setshow] = useState(true);
  const [answer, setanswer] = useState(false);
  const [recent, setrecent] = useState(false);
  const [myProb, setmyProb] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:5000/pi/postRoute/problem")
      .then((res) => setproblems(res.data.problems));
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProblemsByUser(userconnected));
  }, [dispatch]);
  const probUser = useSelector((state) => state.problemReducer.problems);

  function showPosts() {
    setshow(true);
    setanswer(false);
    setrecent(false);
    setmyProb(false);
  }
  function noAnswer() {
    setshow(false);
    setanswer(true);
    setrecent(false);
    setmyProb(false);
  }
  function recentProb() {
    setshow(false);
    setanswer(false);
    setrecent(true);
    setmyProb(false);
  }
  function myProblem() {
    setshow(false);
    setanswer(false);
    setrecent(false);
    setmyProb(true);
  }

  useEffect(() => {
    dispatch(getTop6Contrib());
  }, [dispatch]);
  const topusers = useSelector((state) => state.commentReducer.topusers);

  return (
    <body>
      <div id="wrapper">
        {/*<!-- Main Contents -->*/}
        <div class="main_content">
          <div class="mcontainer">
            <div class="flex space-x-12">
              <div class="w-2/3 flex-shirink-0">
                <div class="flex justify-between relative md:mb-4 mb-3">
                  <div class="flex-1">
                    <h2 class="text-3xl font-semibold"> Problems </h2>
                    <nav class="cd-secondary-nav border-b md:m-0 -mx-4">
                      <ul uk-switcher="connect:#switch ; animation: uk-animation-slide-right-small, uk-animation-slide-left-medium">
                        <li>
                          <a href="#" onClick={showPosts} class="lg:px-2" aria-expanded="false">
                            Popular
                          </a>
                        </li>

                        <li>
                          <a href="#" onClick={recentProb} class="lg:px-2">
                            Recent
                          </a>
                        </li>
                        <li>
                          <a href="#" onClick={noAnswer} class="lg:px-2">
                            Unanswered
                          </a>
                        </li>
                        <li>
                          <a href="#" onClick={myProblem} class="lg:px-2">
                            My Problems
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <Link
                    to={"/addproblem"}
                    class="flex items-center justify-center h-9 lg:px-5 px-2 rounded-md bg-blue-600 text-white space-x-1.5 absolute right-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="md:block "> Create</span>
                  </Link>
                </div>
                <ul class="space-y-6">
                  {show &&
                    problems?.map((problem, index) => {
                      return (
                        <li>
                          <ProblemItem problem={problem} popular={show} key={index} />
                        </li>
                      );
                    })}
                  {answer &&
                    problems?.map((problem, index) => {
                      return (
                        <li>
                          <ProblemItem problem={problem} answer={answer} key={index} />
                        </li>
                      );
                    })}
                  {recent &&
                    problems?.map((problem, index) => {
                      return (
                        <li>
                          <ProblemItem problem={problem} recent={recent} key={index} />
                        </li>
                      );
                    })}
                  {myProb &&
                    probUser.map((problem, index) => {
                      return (
                        <li>
                          <ProblemItem
                            problem={problem}
                            username={userconnected}
                            myProb={myProb}
                            key={index}
                          />
                        </li>
                      );
                    })}
                </ul>
                <br /> <br /> <br /> <br />
                <h1 class="text-2xl font-semibold" hidden>
                  Stuck on Please wait for hosting to be configured
                </h1>
                <div class="md:pl-16 relative" hidden>
                  <div class="-mb-3 flex mt-6 space-x-4">
                    <img
                      src="assets/user/images/avatars/avatar-1.jpg"
                      alt=""
                      class="w-12 h-12 rounded-full -ml-16"
                    />
                    <a href="#" class="font-semibold text-xl">
                      Stella Johnson
                    </a>
                  </div>

                  <div class="flex flex-col flex-grow mb-4 md:flex-row md:items-center min-w-0">
                    <div class="min-w-0 font-medium">
                      <a
                        href="https://tookapic.com/pawelkadysz"
                        class="text-black block truncate"
                        data-card=""
                        data-card-id="c101"
                      >
                        Paweł Kadysz
                      </a>
                    </div>

                    <div class="text-sm md:ml-8">
                      <time datetime="2020-10-06T12:29:50-07:00" title="2020-10-06T12:29:50-07:00">
                        3 months ago
                      </time>
                    </div>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                    aliquip ex ea commodo consequat. Nam liber tempor cum soluta nobis eleifend
                    option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                  </p>
                </div>
              </div>

              <div class="w-1/3 pt-5">
                <div uk-sticky="offset:100">
                  <h2 class="text-2xl font-semibold mb-2"> Top Contributors </h2>
                  <p> People who started the most discussions on Forum. </p>
                  <br />

                  <ul class="space-y-3">
                    {topusers?.map((user, index) => {
                      return (
                        <li>
                          <div class="flex items-center space-x-3">
                            <img
                              src="assets/user/images/avatars/avatar-1.jpg"
                              alt=""
                              class="w-8 h-8 rounded-full"
                            />
                            <a href="#" class="font-semibold">
                              {user._id}
                            </a>
                            <div class="flex items-center space-x-2">
                              <ion-icon
                                name="chatbubble-ellipses-outline"
                                class="text-lg"
                              ></ion-icon>
                              <span> {user.count} </span>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
