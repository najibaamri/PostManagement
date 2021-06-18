/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../../../redux/actions/jobAction";
import JobItem from "./JobItem";

function ListJobs() {
  /*const [jobs, setjobs] = useState([]);

 /useEffect(() => {
    axios.get("http://localhost:5000/pi/postRoute/job").then((res) => setjobs(res.data.jobs));
  }, []);
  console.log(jobs);*/
  const jobs = useSelector((state) => state.jobReducer.jobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  return (
    <div style={{ marginLeft: "200px", backgroundColor: "#152036" }}>
      <br></br>
      <br></br>
      <div class="breadcome-area">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="breadcome-list">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <div class="breadcomb-wp">
                      <div class="breadcomb-icon">
                        <i class="icon nalika-home"></i>
                      </div>
                      <div class="breadcomb-ctn">
                        <h2>Jobs List</h2>
                        <p>
                          Welcome to Nalika <span class="bread-ntd">Admin Template</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <div class="breadcomb-report">
                      <button
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Download Report"
                        class="btn"
                      >
                        <i class="icon nalika-download"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-status mg-b-30">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="product-status-wrap">
                <h4>Jobs List</h4>

                <table>
                  <tr>
                    <th>Username</th>
                    <th>Job Title</th>
                    <th>Description</th>
                    <th>Location</th>
                    <th>Salary</th>
                    <th>JobType</th>
                    <th>Skills</th>
                    <th>Number Employees</th>
                    <th>Job Category</th>
                    <th>Action</th>
                  </tr>

                  {jobs.map((job, index) => {
                    return <JobItem job={job} key={job._id}></JobItem>;
                  })}
                </table>
                <div class="custom-pagination">
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link" href="#">
                        Previous
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListJobs;
