/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./addjob.css";
import axios from "axios";
import * as Yup from "yup";
import { Input, FormFeedback, Button, InputGroupAddon } from "reactstrap";
import { Formik, Form, FieldArray, Field, ErrorMessage } from "formik";
import { NotificationContainer, NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { useLocation } from "react-router";

function EditJob() {
  const location = useLocation((state) => state.job);
  console.log(location.state.job);
  const [categories, setcategories] = useState([]);
  function handleFormSubmit(values, bag) {
    axios.put("http://localhost:5000/pi/postRoute/job/" + location.state.job._id, values);
    //this.bag = bag;
    console.log(values);
    NotificationManager.success("The Job was updated successfully", "Success");
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/pi/catRoute/categoryP")
      .then((res) => setcategories(res.data.result));
  }, []);

  return (
    <body class="bg-gray-100">
      <Formik
        initialValues={location.state.job}
        onSubmit={handleFormSubmit.bind(this)}
        validationSchema={Yup.object().shape({
          title: Yup.string().required(),
          description: Yup.string().min(6).required(),
          location: Yup.string().required(),
          skills: Yup.array().of(Yup.string().required("This field is required")),
          salary: Yup.number().moreThan(0).required(),
          jobType: Yup.string().required(),
          nbEmployees: Yup.number().moreThan(0).required(),
          category_id: Yup.string().required(),
          devis: Yup.string().required(),
        })}
        render={({
          handleChange,
          handleSubmit,
          isValid,
          isSubmitting,
          values,
          handleBlur,
          errors,
          touched,
        }) => {
          return (
            <div>
              <div id="wrapper" class="flex flex-col justify-between h-screen">
                <div class="bg-white py-4 shadow dark:bg-gray-800">
                  <div class="max-w-6xl mx-auto">
                    <div class="flex items-center lg:justify-between justify-around">
                      <a href="trending.html">
                        <img src="assets/images/logo.png" alt="" class="w-32" />
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ marginLeft: "700px" }}>
                  <div class="lg:p-12 max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
                    <Form
                      class="lg:p-10 p-6 space-y-3 relative bg-white shadow-xl rounded-md"
                      style={{ width: "180%", float: "right" }}
                    >
                      <h1 class="lg:text-2xl text-xl font-semibold mb-6">Edit Your Job</h1>
                      <div class="row">
                        <div class="col">
                          <div id="att">
                            <label class="mb-0"> Title </label>
                            <Input
                              value={values.title}
                              type="text"
                              name="title"
                              class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={errors.title && touched.title}
                              valid={!errors.title && touched.title}
                            />
                            {errors.title && touched.title ? (
                              <FormFeedback>{errors.title}</FormFeedback>
                            ) : null}
                          </div>

                          <div id="att">
                            <label class="mb-0"> Description </label>
                            <Input
                              value={values.description}
                              type="textarea"
                              name="description"
                              placeholder="Your Job Description"
                              class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={errors.description && touched.description}
                              valid={!errors.description && touched.description}
                            />
                            {errors.description && touched.description ? (
                              <FormFeedback>{errors.description}</FormFeedback>
                            ) : null}
                          </div>
                          <div id="att">
                            <label class="mb-0"> Location </label>
                            <Input
                              value={values.location}
                              type="text"
                              name="location"
                              placeholder="Your Job Location"
                              class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={errors.location && touched.location}
                              valid={!errors.location && touched.location}
                            />
                            {errors.location && touched.location ? (
                              <FormFeedback>{errors.location}</FormFeedback>
                            ) : null}
                          </div>
                          <div>
                            <label class="mb-0"> Job Type </label>
                            <Input
                              value={values.jobType}
                              type="select"
                              name="jobType"
                              class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={errors.jobType && touched.jobType}
                              valid={!errors.jobType && touched.jobType}
                            >
                              <option defaultValue={values.jobType}></option>
                              <option value="Full-Time Job">Full-Time Job</option>
                              <option value="Part-Time Job">Part-Time Job</option>
                            </Input>
                            {errors.jobType && touched.jobType ? (
                              <FormFeedback>{errors.jobType}</FormFeedback>
                            ) : null}
                          </div>
                        </div>
                        <div class="col">
                          <div id="att">
                            <label class="mb-0"> Skills Required </label>
                            <FieldArray name="skills">
                              {(fieldArrayProps) => {
                                console.log("fieldArrayProps", fieldArrayProps);
                                const { push, remove, form } = fieldArrayProps;
                                const { values } = form;
                                const { skills } = values;
                                return (
                                  <div>
                                    {skills.map((phNumber, index) => (
                                      <div key={index}>
                                        <InputGroupAddon addonType="prepend">
                                          <Field
                                            name={"skills[" + index + "]"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                          />
                                          {index > 0 && (
                                            <Button onClick={() => remove(index)} color="danger">
                                              -
                                            </Button>
                                          )}

                                          <Button onClick={() => push("")}>+</Button>
                                        </InputGroupAddon>

                                        <ErrorMessage
                                          component="div"
                                          className="text-red-500 text-xs "
                                          name={"skills[" + index + "]"}
                                        ></ErrorMessage>
                                      </div>
                                    ))}
                                  </div>
                                );
                              }}
                            </FieldArray>
                          </div>
                          <div id="att">
                            <label class="mb-0"> Number Of Employees Needed </label>
                            <Input
                              value={values.nbEmployees}
                              type="number"
                              name="nbEmployees"
                              placeholder="Your Number Of Employees"
                              class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={errors.nbEmployees && touched.nbEmployees}
                              valid={!errors.nbEmployees && touched.nbEmployees}
                            />
                            {errors.nbEmployees && touched.nbEmployees ? (
                              <FormFeedback>{errors.nbEmployees}</FormFeedback>
                            ) : null}
                          </div>

                          <div id="att">
                            <label class="mb-0"> Job Category </label>
                            <Input
                              type="select"
                              name="category_id"
                              class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={errors.category_id && touched.category_id}
                              valid={!errors.category_id && touched.category_id}
                            >
                              <option defaultValue=""></option>
                              {categories.map((category) => {
                                return (
                                  <option key={category._id} value={category._id}>
                                    {category.name}
                                  </option>
                                );
                              })}
                            </Input>
                            {errors.category_id && touched.category_id ? (
                              <FormFeedback>Job Category is a required field </FormFeedback>
                            ) : null}
                          </div>
                          <div id="att">
                            <label class="mb-0"> Salary </label>
                            <Input
                              value={values.salary}
                              type="number"
                              name="salary"
                              placeholder="Your Job Salary"
                              class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={errors.salary && touched.salary}
                              valid={!errors.salary && touched.salary}
                            />
                            {errors.salary && touched.salary ? (
                              <FormFeedback>{errors.salary}</FormFeedback>
                            ) : null}
                          </div>
                          <div id="att">
                            <label class="mb-0"> Job Devis </label>
                            <Input
                              value={values.devis}
                              type="select"
                              name="devis"
                              class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={errors.devis && touched.devis}
                              valid={!errors.devis && touched.devis}
                            >
                              <option defaultValue=""></option>
                              <option value="DT">DT</option>
                              <option value="Euro">Euro</option>
                              <option value="$">$</option>
                              <option value="£">£</option>
                            </Input>
                            {errors.devis && touched.devis ? (
                              <FormFeedback>Job Devis is a required field </FormFeedback>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div>
                        <button
                          type="button"
                          class="bg-blue-600 font-semibold p-2 mt-5 rounded-md text-center text-white w-full"
                          onClick={handleSubmit}
                          disabled={!isValid || isSubmitting}
                        >
                          Edit Job
                        </button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>

              <div id="backtotop"></div>
            </div>
          );
        }}
      ></Formik>
      <NotificationContainer />
    </body>
  );
}

export default EditJob;
