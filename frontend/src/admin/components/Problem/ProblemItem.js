import React from "react";
import { useDispatch } from "react-redux";
import { deleteProblem, getProblems } from "../../../redux/actions/problemAction";

function ProblemItem({ problem, key }) {
  const dispatch = useDispatch();
  const deleteProblemd = (id) => {
    dispatch(deleteProblem(id));
    dispatch(getProblems());
  };
  return (
    <>
      <tr>
        <td> {problem.username.username} </td>
        <td> {problem.title} </td>
        <td>{problem.description}</td>

        <td style={{ display: "flex" }}>
          <button
            data-toggle="tooltip"
            title="Trash"
            class="pd-setting-ed"
            onClick={() => {
              if (window.confirm("Are you sure you wish to delete this item?"))
                deleteProblemd(problem._id);
            }}
          >
            <i class="fa fa-trash-o" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    </>
  );
}

export default ProblemItem;
