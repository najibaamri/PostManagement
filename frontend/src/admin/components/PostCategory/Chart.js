import { Bar, Doughnut } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobStatics } from "../../../redux/actions/jobAction";
import axios from "axios";
import { getProblemStatics } from "../../../redux/actions/problemAction";

function Chart() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobStatics());
    dispatch(getProblemStatics());
  }, [dispatch]);
  const nbjobs = useSelector((state) => state.jobReducer.statjobs);
  const nbproblems = useSelector((state) => state.problemReducer.stats);

  const jobCategory = [];
  const nbjobspercat = [];

  const problemCategory = [];
  const nbproblemspercat = [];

  //job
  for (const cat of nbjobs) {
    jobCategory.push(cat._id.name);
    nbjobspercat.push(cat.count);
  }
  //problem
  for (const cat of nbproblems) {
    problemCategory.push(cat._id.name);
    nbproblemspercat.push(cat.count);
  }

  const data = {
    chartData: {
      labels: jobCategory,
      datasets: [
        {
          label: "Number of jobs for each category",
          data: nbjobspercat,
          backgroundColor: [
            "rgba(255,99,132,0.6)",
            "rgba(255,99,253,0.6)",
            "rgba(255,54,132,0.6)",
            "rgba(255,99,87,0.6)",
          ],
        },
      ],
    },
    ProblemData: {
      labels: problemCategory,
      datasets: [
        {
          label: "Number of jobs for each category",
          data: nbproblemspercat,
          backgroundColor: [
            "rgba(255,159,64,0.6)",
            "rgba(54,162,235,0.6)",
            "rgba(255,206,86,0.6)",
            "rgba(75,192,192,0.6)",
            "rgba(153,102,255,0.6)",
          ],
        },
      ],
    },
  };
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
                        <h2>Statistics</h2>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"></div>
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
                <div class="add-product"></div>
                <div class="row">
                  <div className="chart" style={{ width: "450px" }}>
                    <h4>Number of Jobs Per Category</h4>
                    <Doughnut data={data.chartData} />
                  </div>

                  <div className="" style={{ width: "450px", margin: "auto" }}>
                    <h4>Number of Problems Per Category</h4>
                    <Doughnut data={data.ProblemData} />
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

export default Chart;
