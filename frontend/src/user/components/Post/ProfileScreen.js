/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts } from "../../../redux/actions/postAction";
import AddPost from "./AddPost";
import PostItem from "./PostItem";
import Posts from "./Posts";
const ProfileScreen = ({ history }) => {
  /*const [posts, setposts] = useState([]);
  const idUser = "60538e8cd81d972e30d3dd30";
  useEffect(() => {
    axios
      .get("http://localhost:5000/pi/postRoute/post/" + idUser)
      .then((res) => setposts(res.data.posts));
  }, []);
  console.log(posts);*/
  let userconnected = "60b02427f8baee267cd980a9";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const posts = useSelector((state) =>
    state.postReducer.posts.filter((post) => post.username._id === userconnected)
  );

  return (
    <>
      <body>
        <div id="wrapper">
          <div class="main_content">
            <div class="mcontainer">
              <div class="profile user-profile bg-white rounded-2xl -mt-4">
                <div class="profiles_banner">
                  <img src="assets/user/images/avatars/profile-cover.jpg" alt="" />
                  <div class="profile_action absolute bottom-0 right-0 space-x-1.5 p-3 text-sm z-50 lg:flex">
                    <a
                      href="#"
                      class="flex items-center justify-center h-8 px-3 rounded-md bg-gray-700 bg-opacity-70 text-white space-x-1.5"
                    >
                      <ion-icon name="crop-outline" class="text-xl"></ion-icon>
                      <span> Crop </span>
                    </a>
                    <a
                      href="#"
                      class="flex items-center justify-center h-8 px-3 rounded-md bg-gray-700 bg-opacity-70 text-white space-x-1.5"
                    >
                      <ion-icon name="create-outline" class="text-xl"></ion-icon>
                      <span> Edit </span>
                    </a>
                  </div>
                </div>
                <div class="profiles_content">
                  <div class="profile_avatar">
                    <div class="profile_avatar_holder">
                      <img src="assets/user/images/avatars/avatar-8.jpg" alt="" />
                    </div>
                    <div class="user_status status_online"></div>
                    <div class="icon_change_photo" hidden>
                      {" "}
                      <ion-icon name="camera" class="text-xl"></ion-icon>{" "}
                    </div>
                  </div>

                  <div class="profile_info">
                    <h1> Josephine Williams </h1>
                    <p>
                      {" "}
                      Family , Food , Fashion , Fourever <a href="#">Edit </a>
                    </p>
                  </div>
                </div>

                <div class="flex justify-between lg:border-t flex-col-reverse lg:flex-row">
                  <nav class="cd-secondary-nav pl-2 is_ligh -mb-0.5 border-transparent">
                    <ul>
                      <li class="active">
                        <Link to={"/post/"}>Posts</Link>
                      </li>
                      <li>
                        <a href="#0">Educations</a>
                      </li>
                      <li>
                        <a href="#0">Experiences </a>
                      </li>
                      <li>
                        <a href="#0">Projects </a>
                      </li>
                      <li>
                        <a href="#0">Skills</a>
                      </li>
                    </ul>
                  </nav>

                  <div class="flex items-center space-x-1.5 flex-shrink-0 pr-3  justify-center order-1">
                    {/**<a href="#" class="text-blue-500"> See all </a> */}
                    <a
                      href="#"
                      class="flex items-center justify-center h-10 px-5 rounded-md bg-blue-600 text-white  space-x-1.5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="w-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span> Add Your Story </span>
                    </a>
                  </div>
                </div>
              </div>

              <div class="lg:flex lg:mt-8 mt-4 lg:space-x-8">
                <div class="space-y-5 flex-shrink-0 lg:w-7/12">
                  <AddPost></AddPost>
                  {posts.map((post) => {
                    return <PostItem post={post} key={post._id}></PostItem>;
                  })}
                </div>

                <div class="lg:w-4/12 space-y-6">
                  {/*<!-- start about -->*/}

                  <div class="widget">
                    <h4 class="text-2xl mb-3 font-semibold"> About </h4>
                    <ul class="text-gray-600 space-y-4">
                      <li class="flex items-center space-x-2">
                        <ion-icon
                          name="home-sharp"
                          class=" rounded-full bg-gray-200 text-xl p-1.5 mr-3"
                        ></ion-icon>
                        Live In <strong> Cairo , Eygept </strong>
                      </li>
                      <li class="flex items-center space-x-2">
                        <ion-icon
                          name="globe"
                          class=" rounded-full bg-gray-200 text-xl p-1.5 mr-3"
                        ></ion-icon>
                        From <strong> Aden , Yemen </strong>
                      </li>
                      <li class="flex items-center space-x-2">
                        <ion-icon
                          name="heart-sharp"
                          class=" rounded-full bg-gray-200 text-xl p-1.5 mr-3"
                        ></ion-icon>
                        From <strong> Relationship </strong>
                      </li>
                      <li class="flex items-center space-x-2">
                        <ion-icon
                          name="logo-rss"
                          class=" rounded-full bg-gray-200 text-xl p-1.5 mr-3"
                        ></ion-icon>
                        Flowwed By <strong> 3,240 Peaple </strong>
                      </li>
                    </ul>
                    <a
                      href="#"
                      class="bg-gray-100 py-2.5 text-center font-semibold w-full mt-4 block rounded"
                    >
                      {" "}
                      Edit{" "}
                    </a>
                  </div>

                  {/*<!-- end about -->*/}
                  {/*<!-- start friends -->*/}
                  <div class="widget border-t pt-4">
                    <div class="flex items-center justify-between mb-4">
                      <div>
                        <h4 class="text-2xl -mb-0.5 font-semibold"> Friends </h4>
                        <p> 3,4510 Friends</p>
                      </div>
                      <a href="#" class="text-blue-600 ">
                        See all
                      </a>
                    </div>
                    <div class="grid grid-cols-3 gap-3 text-gray-600 font-semibold">
                      <a href="#">
                        <div class="avatar relative rounded-md overflow-hidden w-full h-24 mb-2">
                          <img
                            src="assets/user/images/avatars/avatar-1.jpg"
                            alt=""
                            class="w-full h-full object-cover absolute"
                          />
                        </div>
                        <div> Jonathan Ali </div>
                      </a>
                      <a href="#">
                        <div class="avatar relative rounded-md overflow-hidden w-full h-24 mb-2">
                          <img
                            src="assets/user/images/avatars/avatar-2.jpg"
                            alt=""
                            class="w-full h-full object-cover absolute"
                          />
                        </div>
                        <div> Jonathan Ali </div>
                      </a>
                      <a href="#">
                        <div class="avatar relative rounded-md overflow-hidden w-full h-24 mb-2">
                          <img
                            src="assets/user/images/avatars/avatar-3.jpg"
                            alt=""
                            class="w-full h-full object-cover absolute"
                          />
                        </div>
                        <div> Jonathan Ali </div>
                      </a>
                      <a href="#">
                        <div class="avatar relative rounded-md overflow-hidden w-full h-24 mb-2">
                          <img
                            src="assets/user/images/avatars/avatar-4.jpg"
                            alt=""
                            class="w-full h-full object-cover absolute"
                          />
                        </div>
                        <div> Jonathan Ali </div>
                      </a>
                      <a href="#">
                        <div class="avatar relative rounded-md overflow-hidden w-full h-24 mb-2">
                          <img
                            src="assets/user/images/avatars/avatar-5.jpg"
                            alt=""
                            class="w-full h-full object-cover absolute"
                          />
                        </div>
                        <div> Jonathan Ali </div>
                      </a>
                      <a href="#">
                        <div class="avatar relative rounded-md overflow-hidden w-full h-24 mb-2">
                          <img
                            src="assets/user/images/avatars/avatar-6.jpg"
                            alt=""
                            class="w-full h-full object-cover absolute"
                          />
                        </div>
                        <div> Jonathan Ali </div>
                      </a>
                    </div>
                    <a
                      href="#"
                      class="bg-gray-100 py-2.5 text-center font-semibold w-full mt-4 block rounded"
                    >
                      {" "}
                      See all{" "}
                    </a>
                  </div>

                  {/*<!-- end friends -->*/}
                  {/*<!-- start group -->*/}

                  <div class="widget border-t pt-4">
                    <div class="flex items-center justify-between mb-2">
                      <div>
                        <h4 class="text-2xl -mb-0.5 font-semibold"> Groups </h4>
                      </div>
                      <a href="#" class="text-blue-600 ">
                        See all
                      </a>
                    </div>
                    <div>
                      <div class="flex items-center space-x-4 hover:bg-gray-100 rounded-md -mx-2 p-2">
                        <div class="w-14 h-14 flex-shrink-0 rounded-md relative">
                          <img
                            src="assets/user/images/group/group-3.jpg"
                            class="absolute w-full h-full inset-0 rounded-md"
                            alt=""
                          />
                        </div>
                        <div class="flex-1">
                          <h3 class="text-lg font-semibold capitalize"> Graphic Design </h3>
                          <div class="text-sm text-gray-500 -mt-0.5"> 345K Member</div>
                        </div>
                        <a
                          href="#"
                          class="flex items-center justify-center h-9 px-4 rounded-md bg-gray-200 font-semibold"
                        >
                          {" "}
                          Join{" "}
                        </a>
                      </div>
                      <div class="flex items-center space-x-4 hover:bg-gray-100 rounded-md -mx-2 p-2">
                        <div class="w-14 h-14 flex-shrink-0 rounded-md relative">
                          <img
                            src="assets/user/images/group/group-4.jpg"
                            class="absolute w-full h-full inset-0 rounded-md"
                            alt=""
                          />
                        </div>
                        <div class="flex-1">
                          <h3 class="text-lg font-semibold capitalize"> Mountain Riders</h3>
                          <div class="text-sm text-gray-500 -mt-0.5"> 845K Member</div>
                        </div>
                        <a
                          href="#"
                          class="flex items-center justify-center h-9 px-4 rounded-md bg-gray-200 font-semibold"
                        >
                          {" "}
                          Join{" "}
                        </a>
                      </div>
                      <div class="flex items-center space-x-4 hover:bg-gray-100 rounded-md -mx-2 p-2">
                        <div class="w-14 h-14 flex-shrink-0 rounded-md relative">
                          <img
                            src="assets/user/images/group/group-2.jpg"
                            class="absolute w-full h-full inset-0 rounded-md"
                            alt=""
                          />
                        </div>
                        <div class="flex-1">
                          <h3 class="text-lg font-semibold capitalize"> Coffee Addicts </h3>
                          <div class="text-sm text-gray-500 -mt-0.5"> 345K Member</div>
                        </div>
                        <a
                          href="#"
                          class="flex items-center justify-center h-9 px-4 rounded-md bg-gray-200 font-semibold"
                        >
                          {" "}
                          Join{" "}
                        </a>
                      </div>
                      <div class="flex items-center space-x-4 hover:bg-gray-100 rounded-md -mx-2 p-2">
                        <div class="w-14 h-14 flex-shrink-0 rounded-md relative">
                          <img
                            src="assets/user/images/group/group-1.jpg"
                            class="absolute w-full h-full inset-0 rounded-md"
                            alt=""
                          />
                        </div>
                        <div class="flex-1">
                          <h3 class="text-lg font-semibold capitalize"> Architecture </h3>
                          <div class="text-sm text-gray-500 -mt-0.5"> 845K Member</div>
                        </div>
                        <a
                          href="#"
                          class="flex items-center justify-center h-9 px-4 rounded-md bg-gray-200 font-semibold"
                        >
                          {" "}
                          Join{" "}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/*<!-- end group -->*/}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*<!-- open chat box -->*/}
        <div uk-toggle="target: #offcanvas-chat" class="start-chat">
          <svg
            class="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            ></path>
          </svg>
        </div>

        <div id="offcanvas-chat" uk-offcanvas="flip: true; overlay: true">
          <div class="uk-offcanvas-bar bg-white p-0 w-full lg:w-80">
            <div class="relative pt-5 px-4">
              <h3 class="text-2xl font-bold mb-2"> Chats </h3>

              <div class="absolute right-3 top-4 flex items-center">
                <button
                  class="uk-offcanvas-close  px-2 -mt-1 relative rounded-full inset-0 lg:hidden blcok"
                  type="button"
                  uk-close
                ></button>

                <a href="#" uk-toggle="target: #search;animation: uk-animation-slide-top-small">
                  <ion-icon
                    name="search"
                    class="text-2xl hover:bg-gray-100 p-1 rounded-full"
                  ></ion-icon>
                </a>
                <a href="#">
                  <ion-icon
                    name="cog"
                    class="text-2xl hover:bg-gray-100 p-1 rounded-full"
                  ></ion-icon>
                </a>
                <a href="#">
                  <ion-icon
                    name="ellipsis-vertical"
                    class="text-2xl hover:bg-gray-100 p-1 rounded-full"
                  ></ion-icon>
                </a>
              </div>
            </div>

            <div
              class="absolute bg-white z-10 w-full -mt-5 lg:mt-0 transform translate-y-1.5 py-2 border-b items-center flex"
              id="search"
              hidden
            >
              <input type="text" placeholder="Search.." class="flex-1" />
              <ion-icon
                name="close-outline"
                class="text-2xl hover:bg-gray-100 p-1 rounded-full mr-4 cursor-pointer"
                uk-toggle="target: #search;animation: uk-animation-slide-top-small"
              ></ion-icon>
            </div>

            <nav class="cd-secondary-nav border-b extanded mb-2">
              <ul uk-switcher="connect: #chats-tab; animation: uk-animation-fade">
                <li class="uk-active">
                  <a class="active" href="#0">
                    {" "}
                    Friends{" "}
                  </a>
                </li>
                <li>
                  <a href="#0">
                    Groups <span> 10 </span>{" "}
                  </a>
                </li>
              </ul>
            </nav>

            <div class="contact-list px-2 uk-switcher" id="chats-tab">
              <div>
                <a href="timeline.html">
                  <div class="contact-avatar">
                    <img src="assets/user/images/avatars/avatar-1.jpg" alt="" />
                    <span class="user_status status_online"></span>
                  </div>
                  <div class="contact-username"> Dennis Han</div>
                </a>
                <a href="timeline.html">
                  <div class="contact-avatar">
                    <img src="assets/user/images/avatars/avatar-2.jpg" alt="" />
                    <span class="user_status"></span>
                  </div>
                  <div class="contact-username"> Erica Jones</div>
                </a>
                <a href="timeline.html">
                  <div class="contact-avatar">
                    <img src="assets/user/images/avatars/avatar-3.jpg" alt="" />
                  </div>
                  <div class="contact-username">Stella Johnson</div>
                </a>
                <a href="timeline.html">
                  <div class="contact-avatar">
                    <img src="assets/user/images/avatars/avatar-4.jpg" alt="" />
                  </div>
                  <div class="contact-username"> Alex Dolgove</div>
                </a>
              </div>
              <div>
                <a href="timeline.html">
                  <div class="contact-avatar">
                    <img src="assets/user/images/avatars/avatar-1.jpg" alt="" />
                    <span class="user_status status_online"></span>
                  </div>
                  <div class="contact-username"> Dennis Han</div>
                </a>
                <a href="timeline.html">
                  <div class="contact-avatar">
                    <img src="assets/user/images/avatars/avatar-2.jpg" alt="" />
                    <span class="user_status"></span>
                  </div>
                  <div class="contact-username"> Erica Jones</div>
                </a>
                <a href="timeline.html">
                  <div class="contact-avatar">
                    <img src="assets/user/images/avatars/avatar-3.jpg" alt="" />
                  </div>
                  <div class="contact-username">Stella Johnson</div>
                </a>
                <a href="timeline.html">
                  <div class="contact-avatar">
                    <img src="assets/user/images/avatars/avatar-4.jpg" alt="" />
                  </div>
                  <div class="contact-username"> Alex Dolgove</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};
export default ProfileScreen;
