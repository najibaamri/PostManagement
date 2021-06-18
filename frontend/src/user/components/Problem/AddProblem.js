/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { Input, FormFeedback } from "reactstrap";
import { Formik, Form } from "formik";
import { NotificationContainer, NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import "../Job/addjob.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

let userconnected = "60b02427f8baee267cd980a9";

function AddProblem() {
  const [editorState, seteditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    seteditorState(editorState);
  };
  console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));

  const [categories, setcategories] = useState([]);
  function handleFormSubmit(values, bag) {
    values.description = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    axios.post("http://localhost:5000/pi/postRoute/problem", values);
    //this.bag = bag;
    console.log("description: " + values.description);
    NotificationManager.success("The problem was successfully added", "Success");
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/pi/catRoute/categoryP")
      .then((res) => setcategories(res.data.result));
  }, []);

  return (
    <body class="bg-gray-100">
      <Formik
        initialValues={{ title: "", description: "", username: userconnected }}
        onSubmit={handleFormSubmit.bind(this)}
        validationSchema={Yup.object().shape({
          title: Yup.string().required(),
          description: Yup.string(),
          category_id: Yup.string().required(),
        })}
        render={({
          handleChange,
          handleSubmit,
          isValid,
          isSubmitting,
          handleBlur,
          errors,
          touched,
          setFieldValue,
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

                <div style={{ marginLeft: "300px", marginBottom: "100px" }}>
                  <div class="lg:p-12 max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
                    <Form class="lg:p-10 p-6 space-y-3 relative bg-white shadow-xl rounded-md">
                      <h1
                        class="lg:text-2xl text-xl font-semibold mb-6"
                        style={{ marginLeft: "100px" }}
                      >
                        Post Your Problem
                      </h1>

                      <div>
                        <label class="mb-0"> Title </label>
                        <Input
                          name="title"
                          type="text"
                          placeholder="Your Problem Title"
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
                        <Editor
                          editorState={editorState}
                          toolbarClassName="toolbarClassName"
                          wrapperClassName="wrapperClassName"
                          editorClassName="editorClassName"
                          onEditorStateChange={onEditorStateChange}
                        />

                        <Input
                          hidden
                          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                          type="textarea"
                          name="description"
                          placeholder="Your Problem Description"
                          class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
                          onChange={setFieldValue}
                          onBlur={handleBlur}
                          invalid={errors.description && touched.description}
                          valid={!errors.description && touched.description}
                        />
                        {errors.description && touched.description ? (
                          <FormFeedback>{errors.description}</FormFeedback>
                        ) : null}
                      </div>
                      <div id="att">
                        <label class="mb-0"> Category </label>
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
                          <FormFeedback>Problem Category is a required field </FormFeedback>
                        ) : null}
                      </div>

                      <div>
                        <button
                          type="button"
                          class="bg-blue-600 font-semibold p-2 mt-5 rounded-md text-center text-white w-full"
                          onClick={handleSubmit}
                          disabled={!isValid || isSubmitting}
                        >
                          Post Problem
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

export default AddProblem;
