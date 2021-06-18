import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { createCategory, updateCategory } from "../../../redux/actions/categorypAction";

function EditCategoryp() {
  const nameRef = useRef();
  const dispatch = useDispatch();
  const location = useLocation((state) => state.category);
  console.log(location.state.category);
  const history = useHistory();
  const submit = () => {
    const name = nameRef.current.value;
    dispatch(updateCategory(location.state.category._id, { name }));
    history.push("/categoriespAdmin");
  };

  return (
    <div style={{ marginLeft: "200px", backgroundColor: "#152036" }}>
      <br />
      <br />
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
                        <h2>Edit A Post Category</h2>
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
      <div class="single-product-tab-area mg-b-30">
        <div class="single-pro-review-area">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="review-tab-pro-inner" style={{ marginBottom: "263px" }}>
                  <ul id="myTab3" class="tab-review-design">
                    <li class="active">
                      <a href="#description">
                        <i class="icon nalika-edit" aria-hidden="true"></i> Add Category
                      </a>
                    </li>
                  </ul>
                  <div id="myTabContent" class="tab-content custom-product-edit">
                    <div class="product-tab-list tab-pane  active in">
                      <div class="">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div class="review-content-section">
                            <div class="input-group mg-b-pro-edt">
                              <span class="input-group-addon">
                                <i class="icon nalika-edit" aria-hidden="true"></i>
                              </span>
                              <input
                                ref={nameRef}
                                type="text"
                                class="form-control"
                                style={{ backgroundColor: "#152036" }}
                                placeholder="Category Name"
                                defaultValue={location.state.category.name}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="text-center custom-pro-edt-ds">
                            <button
                              onClick={() => submit()}
                              type="button"
                              class="btn btn-ctl-bt waves-effect waves-light m-r-10"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCategoryp;
