/* eslint-disable jsx-a11y/alt-text */

import axios from "axios";
import { useEffect, useState } from "react";
import LinesEllipsis from "react-lines-ellipsis";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProblem, getProblemsByUser } from "../../../redux/actions/problemAction";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ProblemItem({ problem, popular, answer, recent, myProb, username }) {
  const [nbComments, setnbComments] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:5000/pi/commentRoute/nbcomment/" + problem._id)
      .then((res) => {
        setnbComments(res.data.nbcomments);
      })
      .catch((err) => console.log(err.response.data.msg));
  }, [problem._id]);

  const dispatch = useDispatch();
  const deleteProb = (id) => {
    dispatch(deleteProblem(id));
    dispatch(getProblemsByUser(username));
  };

  return (
    <div>
      {nbComments >= 0 && recent && (
        <Link to={"/problem/" + problem._id}>
          <div class="flex items-start pl-3 space-x-4">
            <img
              src="assets/user/images/avatars/avatar-2.jpg"
              alt=""
              class="w-16 h-16 rounded-full"
            />
            <div class="flex-1">
              <h3 class="text-lg font-semibold line-clamp-1">{problem.title}</h3>
              <p class="text-sm text-gray-400 mb-2">
                Posted By: <span data-href="%40tag-dev.html"> </span>
                <Moment fromNow>{problem.createdAt}</Moment>
              </p>
              <p class="leading-6 line-clamp-2">
                <LinesEllipsis
                  text={problem.description}
                  maxLine="2"
                  ellipsis="..."
                  trimRight
                  basedOn="letters"
                />
              </p>
            </div>
            <div class="flex items-center space-x-4">
              <ion-icon name="chatbubbles" class="text-3xl"></ion-icon>
              <span class="text-xl"> {nbComments} </span>
            </div>
          </div>
        </Link>
      )}
      {nbComments > 0 && popular && !answer && (
        <Link to={"/problem/" + problem._id}>
          <div class="flex items-start pl-3 space-x-4">
            <img
              src="assets/user/images/avatars/avatar-2.jpg"
              alt=""
              class="w-16 h-16 rounded-full"
            />
            <div class="flex-1">
              <h3 class="text-lg font-semibold line-clamp-1">{problem.title}</h3>
              <p class="text-sm text-gray-400 mb-2">
                Posted By: <span data-href="%40tag-dev.html"> </span>
                <Moment fromNow>{problem.createdAt}</Moment>
              </p>
              <p class="leading-6 line-clamp-2">
                <LinesEllipsis
                  text={problem.description}
                  maxLine="2"
                  ellipsis="..."
                  trimRight
                  basedOn="letters"
                />
              </p>
            </div>
            <div class="flex items-center space-x-4">
              <ion-icon name="chatbubbles" class="text-3xl"></ion-icon>
              <span class="text-xl"> {nbComments} </span>
            </div>
          </div>
        </Link>
      )}
      {nbComments === 0 && answer && !popular && (
        <Link to={"/problem/" + problem._id}>
          <div class="flex items-start pl-3 space-x-4">
            <img
              src="assets/user/images/avatars/avatar-2.jpg"
              alt=""
              class="w-16 h-16 rounded-full"
            />
            <div class="flex-1">
              <h3 class="text-lg font-semibold line-clamp-1">{problem.title}</h3>
              <p class="text-sm text-gray-400 mb-2">
                Posted By: <span data-href="%40tag-dev.html"></span>
                <Moment fromNow>{problem.createdAt}</Moment>
              </p>
              <p class="leading-6 line-clamp-2">
                <LinesEllipsis
                  text={problem.description}
                  maxLine="2"
                  ellipsis="..."
                  trimRight
                  basedOn="letters"
                />
              </p>
            </div>
            <div class="flex items-center space-x-4">
              <ion-icon name="chatbubbles" class="text-3xl"></ion-icon>
              <span class="text-xl"> {nbComments} </span>
            </div>
          </div>
        </Link>
      )}
      {myProb && (
        <div class="flex items-start pl-3 space-x-4">
          <img
            src="assets/user/images/avatars/avatar-2.jpg"
            alt=""
            class="w-16 h-16 rounded-full"
          />
          <div class="flex-1">
            <Link to={"/problem/" + problem._id}>
              <h3 class="text-lg font-semibold line-clamp-1">{problem.title}</h3>
            </Link>
            <p class="text-sm text-gray-400 mb-2">
              Posted By: <span data-href="%40tag-dev.html"> </span>
              <Moment fromNow>{problem.createdAt}</Moment>
            </p>
            <p class="leading-6 line-clamp-2">
              <LinesEllipsis
                text={problem.description}
                maxLine="2"
                ellipsis="..."
                trimRight
                basedOn="letters"
              />
            </p>
            <div className="row">
              <button
                onClick={() => deleteProb(problem._id)}
                class="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600"
              >
                <i class="uil-trash-alt mr-1"></i>Delete
              </button>
              <Link
                to={{
                  pathname: "/editproblem",
                  state: { problem },
                }}
              >
                <button class="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                  <i class="uil-edit-alt mr-1"></i> Edit
                </button>
              </Link>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <ion-icon name="chatbubbles" class="text-3xl"></ion-icon>
            <span class="text-xl"> {nbComments} </span>
          </div>
        </div>
      )}
    </div>
  );
}
