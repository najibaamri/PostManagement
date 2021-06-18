/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import LinesEllipsis from "react-lines-ellipsis";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteJob, getJobs } from "../../../redux/actions/jobAction";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function JobItem({ job, showFilter, key }) {
  const dispatch = useDispatch();
  function deleteJobd(id) {
    // axios.delete("http://localhost:5000/pi/postRoute/job/" + id).then(setjobs(jobs));
    dispatch(deleteJob(id));
    dispatch(getJobs());
  }

  return (
    <div>
      <div class="job-details">
        <a href="job-details.html" class="job-logo">
          <img src="assets/user/images/brand/brand-avatar-4.png" alt="" />
        </a>

        <div class="job-description">
          <h4>{job.username.username} </h4>
          {showFilter && (
            <>
              <button
                class="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600"
                style={{ float: "right" }}
                onClick={() => deleteJobd(job._id)}
              >
                <i class="uil-trash-alt mr-1"></i>Delete
              </button>
              <Link
                to={{
                  pathname: "/editjob",
                  state: { job },
                }}
              >
                <button
                  style={{ float: "right" }}
                  class="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800"
                >
                  <i class="uil-edit-alt mr-1"></i> Edit
                </button>
              </Link>
            </>
          )}
          <Link to={"/job/" + job._id}>
            <h3> {job.title} </h3>
          </Link>
          <p class="job-text">
            <LinesEllipsis
              text={job.description}
              maxLine="3"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </p>
          <div class="job-tags">
            {job.skills.map((skill, index) => {
              return <a href="#"> {skill} </a>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
