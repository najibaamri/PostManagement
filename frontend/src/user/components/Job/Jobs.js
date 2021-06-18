/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getcategories } from "../../../redux/actions/categorypAction";
import { getJobs, deleteJob, searchjobs } from "../../../redux/actions/jobAction";
import JobItem from "./JobItem";

export default function Jobs() {
  const dispatch = useDispatch();
  const typeRef = useRef();
  const categoryRef = useRef();
  let userconnected = "60b02427f8baee267cd980a9";

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);
  const jobs = useSelector((state) => state.jobReducer.jobs);
  const filtered = useSelector((state) =>
    state.jobReducer.jobs.filter((job) => job.username._id === userconnected)
  );

  //ethi khedmet
  // const [jobs, setjobs] = useState([]);
  const [showJobs, setshowJobs] = useState(true);
  //const [filtered, setfiltered] = useState([]);
  const [showFilter, setshowFilter] = useState(false);
  /*useEffect(() => {
    axios.get("http://localhost:5000/pi/postRoute/job").then((res) => {
      setjobs(res.data.jobs);
      setfiltered(res.data.jobs.filter((job) => job.username === "607e1bceb6e3422b40b74212"));
    });
  }, []);*/
  console.log(jobs);
  console.log(filtered);

  //categories
  useEffect(() => {
    dispatch(getcategories());
  }, [dispatch]);
  const categories = useSelector((state) => state.categorypReducer.categories);

  //search jobs
  const handleSearchInput = async (event) => {
    const type = typeRef.current.value;
    console.log("type: " + type);
    const searchField = event.target.value;
    if (showListCat) {
      const categoryid = categoryRef.current.value;
      console.log(categoryid);

      if (categoryid !== null) {
        dispatch(searchjobs(type, categoryid));
      } else {
        console.log(searchField);
        dispatch(getJobs());
      }
    } else {
      console.log(searchField);

      if (searchField !== "") {
        dispatch(searchjobs(type, searchField));
      } else {
        console.log(searchField);
        dispatch(getJobs());
      }
    }
  };

  const [showListCat, setshowListCat] = useState(false);

  const handlechange = (event) => {
    const type = typeRef.current.value;
    if (type === "category") {
      setshowListCat(true);
    } else {
      setshowListCat(false);
    }
  };

  return (
    <body>
      <div class="main_content">
        <div class="mcontainer">
          <div class="lg:flex  lg:space-x-12">
            <div class="lg:w-3/4">
              <div class="flex justify-between relative md:mb-4 mb-3">
                <div class="flex-1">
                  <h2 class="text-3xl font-semibold"> Jobs </h2>
                  <nav class="cd-secondary-nav border-b md:m-0 -mx-4">
                    <ul uk-switcher="connect:#switch ; animation: uk-animation-slide-right-small, uk-animation-slide-left-medium">
                      <li>
                        <a
                          onClick={() => {
                            setshowJobs(true);
                            setshowFilter(false);
                          }}
                          class="lg:px-2"
                        >
                          Suggestions
                        </a>
                      </li>

                      <li>
                        <a
                          onClick={() => {
                            setshowJobs(false);
                            setshowFilter(true);
                          }}
                          class="lg:px-2"
                        >
                          My Jobs
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <Link
                  to={"/addjob"}
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
              <div class="job-list">
                {showJobs &&
                  jobs.map((job, index) => {
                    return <JobItem job={job} key={job._id} />;
                  })}
                {showFilter &&
                  filtered.map((job, index) => {
                    return <JobItem job={job} showFilter={showFilter} key={job._id} />;
                  })}
              </div>
            </div>
            <div class="w-1/3 pt-5">
              <div uk-sticky="offset:100">
                <h2 class="text-2xl font-semibold mb-2"> Search Jobs</h2>
                <p> Search your desired jobs easily and faster. </p>
                <br />

                <ul class="space-y-3">
                  <li>
                    <div class="flex items-center space-x-3">
                      <i class="uil-search-alt"></i>
                      <select class="form-control" ref={typeRef} onChange={handlechange}>
                        <option defaultValue="">Select Search Type</option>
                        <option value="title">Title</option>
                        <option value="description">Description</option>
                        <option value="location">Location</option>
                        <option value="skills">Skills</option>
                        <option value="salary">Salary</option>
                        <option value="category">Category</option>
                      </select>

                      {!showListCat && (
                        <input
                          type="text"
                          placeholder="Search..."
                          class="form-control"
                          onChange={handleSearchInput}
                        />
                      )}
                      {showListCat && (
                        <select class="form-control" ref={categoryRef} onChange={handleSearchInput}>
                          {categories?.map((category) => {
                            return (
                              <option value={category._id} key={category._id}>
                                {category.name}
                              </option>
                            );
                          })}
                        </select>
                      )}

                      <div class="flex items-center space-x-2">
                        <ion-icon name="chatbubble-ellipses-outline" class="text-lg"></ion-icon>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
