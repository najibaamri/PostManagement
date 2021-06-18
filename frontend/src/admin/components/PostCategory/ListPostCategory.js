/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getcategories } from "../../../redux/actions/categorypAction";
import CategorypItem from "./CategorypItem";

function ListPostCategory() {
  const categories = useSelector((state) => state.categorypReducer.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcategories());
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
                        <h2>Post Categories List</h2>
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
                <h4>Post Categories List</h4>
                <div class="add-product">
                  <Link to={"/addCategoryp"}>Add Category</Link>
                </div>
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>

                  {categories.map((category, index) => {
                    return <CategorypItem category={category} key={category._id}></CategorypItem>;
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

export default ListPostCategory;
