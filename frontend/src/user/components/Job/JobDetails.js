/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */

import axios from "axios";
import { useEffect, useState } from "react";
import Moment from "react-moment";
/* eslint-disable jsx-a11y/anchor-is-valid */
export default function JobDetails(props) {
  const id = props.match.params.id;
  /*store.dispatch(getJobById(id));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobById(id));
  }, [id, dispatch]);
  const jobWanted = useSelector((state) => state.jobReducer.job);
  console.log(jobWanted);*/
  const [jobWanted, setjobWanted] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/pi/postRoute/jobdetail/" + id)
      .then((res) => setjobWanted(res.data.job));
  }, [id]);
  console.log(jobWanted);

  return (
    <body>
      {"<!-- Main Contents -->"}
      <div class="main_content">
        <div class="mcontainer">
          <div class="lg:flex  lg:space-x-12">
            <div class="lg:w-3/4 space-y-5">
              {/*<div class="h-44 mb-4 md:h-60 overflow-hidden relative rounded-lg w-full">
                <img
                  src="assets/user/images/blog/img-1.jpg"
                  alt=""
                  class="w-full h-full absolute inset-0 object-cover"
                />
  </div>*/}

              <div class="border-b md:p-3 pb-3 border-gray-100">
                {jobWanted.map((job) => {
                  return <h2 class="text-2xl font-bold">{job.title} </h2>;
                })}

                {jobWanted.map((job) => {
                  return <p>{job.title}</p>;
                })}
              </div>

              <h1 class="block text-xl font-bold"> Job details </h1>

              <div class="md:flex">
                <div class="md:w-3/4 space-y-4 -mt-2">
                  <div class="flex items-center space-x-3">
                    <ion-icon
                      name="unlink"
                      class="bg-gray-100 p-1.5 rounded-full text-xl"
                    ></ion-icon>
                    <div class="flex-1">
                      <div>
                        {jobWanted.map((job) => {
                          return (
                            <a href="#" class="text-blue-500">
                              {job.username.username}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center space-x-3">
                    <ion-icon
                      name="mail-open"
                      class="bg-gray-100 p-1.5 rounded-full text-xl"
                    ></ion-icon>
                    <div class="flex-1">
                      {jobWanted.map((job) => {
                        return <div>{job.jobType}</div>;
                      })}
                    </div>
                  </div>
                  <div class="flex items-center space-x-3">
                    <ion-icon
                      name="mail-open"
                      class="bg-gray-100 p-1.5 rounded-full text-xl"
                    ></ion-icon>
                    <div class="flex-1">
                      {jobWanted.map((job) => {
                        return (
                          <div>
                            Posted &nbsp;
                            <Moment fromNow>{job.createdAt}</Moment>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div class="flex items-center space-x-3">
                    <ion-icon
                      name="unlink"
                      class="bg-gray-100 p-1.5 rounded-full text-xl"
                    ></ion-icon>
                    <div class="flex-1">
                      <div>
                        {jobWanted.map((job) => {
                          return <div class="text-blue-500">{job.nbEmployees} employees</div>;
                        })}
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center space-x-3">
                    <ion-icon
                      name="albums"
                      class="bg-gray-100 p-1.5 rounded-full text-xl"
                    ></ion-icon>
                    <div class="flex-1">
                      <div>
                        {jobWanted.map((job) => {
                          return <div> {job.location}</div>;
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-1 space-y-4 md:mt-0 mt-6">
                  <div>
                    <div class="text- font-semibold"> Salary </div>
                    {jobWanted.map((job) => {
                      return (
                        <div>
                          {job.salary} {job.devis}
                        </div>
                      );
                    })}
                  </div>
                  {/*<div>
                    <div class="text- font-semibold"> Maximum </div>
                    <div> $700 Per Month</div>
                  </div>*/}
                  <a
                    href="#"
                    class="bg-blue-600 text-white py-2.5 text-center font-semibold w-full mt-4 block rounded"
                  >
                    Apply now
                  </a>
                </div>
              </div>

              <hr />
              <h3 class="text-xl font-bold"> Job Description </h3>

              <div class="space-y-3">
                {jobWanted.map((job) => {
                  return <p> {job.description} </p>;
                })}
              </div>
              <h3 class="text-xl font-bold"> Skills Required </h3>

              <div class="space-y-3">
                {jobWanted.map((job) => {
                  return (
                    <ul>
                      {job.skills.map((skill) => {
                        return <li>{skill}</li>;
                      })}
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
