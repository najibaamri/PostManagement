import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCategory, getcategories } from "../../../redux/actions/categorypAction";

function CategprypItem({ category, key }) {
  const dispatch = useDispatch();
  const deleteCatd = (id) => {
    dispatch(deleteCategory(id));
    dispatch(getcategories());
  };
  return (
    <>
      <tr>
        <td> {category.name} </td>

        <td style={{ display: "flex" }}>
          <Link
            to={{
              pathname: "/editCategoryp",
              state: { category },
            }}
          >
            <button data-toggle="tooltip" title="" class="pd-setting-ed" data-original-title="Edit">
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            </button>
          </Link>
          <button
            data-toggle="tooltip"
            title="Trash"
            class="pd-setting-ed"
            onClick={() => {
              if (window.confirm("Are you sure you wish to delete this item?"))
                deleteCatd(category._id);
            }}
          >
            <i class="fa fa-trash-o" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    </>
  );
}

export default CategprypItem;
