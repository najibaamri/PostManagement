import axios from "axios";
import React, { useEffect, useState } from "react";
import LinesEllipsis from "react-lines-ellipsis";
import { useDispatch } from "react-redux";
import { deleteJob, getJobs } from "../../../redux/actions/jobAction";

function JobItem({ job, key }) {
  const [catName, setcatName] = useState("");

  const dispatch = useDispatch();
  const deleteJobd = (id) => {
    dispatch(deleteJob(id));
    dispatch(getJobs());
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/pi/catRoute/categorypbyid/" + job.category_id)
      .then((res) => setcatName(res.data.result?.name));
  }, [job.category_id]);

  return (
    <>
      <tr>
        <td> {job.username.username} </td>
        <td>{job.title} </td>
        <td>
          <LinesEllipsis
            text={job.description}
            maxLine="1"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </td>
        <td>{job.location}</td>
        <td>{job.salary}</td>
        <td>{job.jobType}</td>
        <td>
          {job.skills.map((skill) => {
            return <p>{skill},</p>;
          })}{" "}
        </td>
        <td>{job.nbEmployees}</td>
        <td>{catName}</td>
        <td style={{ display: "flex" }}>
          {/*  <Link to={"/jobDetails/" + job._id}>
                            <button data-toggle="tooltip" title="Edit" class="pd-setting-ed">
                              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                            </button>
                    </Link>*/}
          <button
            data-toggle="tooltip"
            title="Trash"
            class="pd-setting-ed"
            onClick={() => {
              if (window.confirm("Are you sure you wish to delete this item?")) deleteJobd(job._id);
            }}
          >
            <i class="fa fa-trash-o" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    </>
  );
}

export default JobItem;
