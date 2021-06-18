/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import AddPostPopup from "./Post/AddPostPopup";
import { MapContainer } from "./Post/MapContainer";
//import Jobs from "./Job/Jobs";
export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div id="wrapper">
          <header>
            <div class="header_wrap">
              <div class="header_inner mcontainer">
                <div class="left_side">
                  <span
                    class="slide_menu"
                    uk-toggle="target: #wrapper ; cls: is-collapse is-active"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>

                  <div id="logo">
                    <a href="homepage.html">
                      <img src="assets/user/images/logoo.png" alt="" />
                      <img src="assets/user/images/logoo.png" class="logo_mobile" alt="" />
                    </a>
                  </div>
                </div>
                {/*  <!-- search icon for mobile -->*/}

                <div
                  class="header-search-icon"
                  uk-toggle="target: #wrapper ; cls: show-searchbox"
                ></div>
                <div class="header_search">
                  <input
                    value=""
                    type="text"
                    class="form-control"
                    placeholder="Search for Friends , Videos and more.."
                    autocomplete="off"
                  />
                  <i class="uil-search-alt"></i>
                </div>
                <div
                  uk-drop="mode: click"
                  class="hidden md:w-1/3 w-11/12 shadow-lg rounded-md -mt-2 bg-white"
                >
                  <div class="-mt-2 p-3">
                    <h4 class="font-semibold mb-1 mt-2 px-2.5 text-lg"> Recently </h4>
                    <ul>
                      <li>
                        <a
                          href="#"
                          class="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
                        >
                          <img
                            src="assets/user/images/avatars/avatar-4.jpg"
                            alt=""
                            class="border mr-3 rounded-full shadow-sm w-8"
                          />
                          Erica Jones
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
                        >
                          <img
                            src="assets/user/images/group/group-2.jpg"
                            alt=""
                            class="border mr-3 rounded-full shadow-sm w-8"
                          />
                          Coffee Addicts
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
                        >
                          <img
                            src="assets/user/images/group/group-4.jpg"
                            alt=""
                            class="border mr-3 rounded-full shadow-sm w-8"
                          />
                          Mountain Riders
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
                        >
                          <img
                            src="assets/user/images/group/group-5.jpg"
                            alt=""
                            class="border mr-3 rounded-full shadow-sm w-8"
                          />
                          Property Rent And Sale
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="right_side">
                  <div class="header_widgets">
                    <a href="#" class="is_link">
                      Home
                    </a>
                    <a href="#" class="is_link">
                      Dennis Han
                    </a>

                    <div uk-drop="mode: click" class="header_dropdown dropdown_cart">
                      <div class="drop_headline">
                        <h4> My Cart </h4>
                        <a
                          href="#"
                          class="btn_action hover:bg-gray-100 mr-2 px-2 py-1 rounded-md underline"
                        >
                          Checkout
                        </a>
                      </div>

                      <ul class="dropdown_cart_scrollbar" data-simplebar>
                        <li>
                          <div class="cart_avatar">
                            <img src="assets/user/images/product/2.jpg" alt="" />
                          </div>
                          <div class="cart_text">
                            <div class=" font-semibold leading-4 mb-1.5 text-base line-clamp-1">
                              Wireless headphones
                            </div>
                            <p class="text-sm">Type Accessories </p>
                          </div>
                          <div class="cart_price">
                            <span> $14.99 </span>
                            <button class="type"> Remove</button>
                          </div>
                        </li>
                        <li>
                          <div class="cart_avatar">
                            <img src="assets/user/images/product/13.jpg" alt="" />
                          </div>
                          <div class="cart_text">
                            <div class=" font-semibold leading-4 mb-1.5 text-base line-clamp-1">
                              Parfum Spray
                            </div>
                            <p class="text-sm">Type Parfums </p>
                          </div>
                          <div class="cart_price">
                            <span> $16.99 </span>
                            <button class="type"> Remove</button>
                          </div>
                        </li>
                        <li>
                          <div class="cart_avatar">
                            <img src="assets/user/images/product/15.jpg" alt="" />
                          </div>
                          <div class="cart_text">
                            <div class=" font-semibold leading-4 mb-1.5 text-base line-clamp-1">
                              Herbal Shampoo
                            </div>
                            <p class="text-sm">Type Herbel </p>
                          </div>
                          <div class="cart_price">
                            <span> $12.99 </span>
                            <button class="type"> Remove</button>
                          </div>
                        </li>
                        <li>
                          <div class="cart_avatar">
                            <img src="assets/user/images/product/14.jpg" alt="" />
                          </div>
                          <div class="cart_text">
                            <div class=" font-semibold leading-4 mb-1.5 text-base line-clamp-1">
                              Wood Chair
                            </div>
                            <p class="text-sm">Type Furniture </p>
                          </div>
                          <div class="cart_price">
                            <span> $19.99 </span>
                            <button class="type"> Remove</button>
                          </div>
                        </li>
                        <li>
                          <div class="cart_avatar">
                            <img src="assets/user/images/product/9.jpg" alt="" />
                          </div>
                          <div class="cart_text">
                            <div class=" font-semibold leading-4 mb-1.5 text-base line-clamp-1">
                              Strawberries FreshRipe
                            </div>
                            <p class="text-sm">Type Fruit </p>
                          </div>
                          <div class="cart_price">
                            <span> $12.99 </span>
                            <button class="type"> Remove</button>
                          </div>
                        </li>
                        <li>
                          <div class="cart_avatar">
                            <img src="assets/user/images/product/2.jpg" alt="" />
                          </div>
                          <div class="cart_text">
                            <div class=" font-semibold leading-4 mb-1.5 text-base line-clamp-1">
                              Wireless headphones
                            </div>
                            <p class="text-sm">Type Accessories </p>
                          </div>
                          <div class="cart_price">
                            <span> $14.99 </span>
                            <button class="type"> Remove</button>
                          </div>
                        </li>
                        <li>
                          <div class="cart_avatar">
                            <img src="assets/user/images/product/13.jpg" alt="" />
                          </div>
                          <div class="cart_text">
                            <div class=" font-semibold leading-4 mb-1.5 text-base line-clamp-1">
                              Parfum Spray
                            </div>
                            <p class="text-sm">Type Parfums </p>
                          </div>
                          <div class="cart_price">
                            <span> $16.99 </span>
                            <button class="type"> Remove</button>
                          </div>
                        </li>
                      </ul>

                      <div class="cart_footer">
                        <p> Subtotal : $ 320 </p>
                        <h1>
                          Total : <strong> $ 320</strong>
                        </h1>
                      </div>
                    </div>

                    <a href="#" class="is_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                      <span>3</span>
                    </a>
                    <div uk-drop="mode: click" class="header_dropdown">
                      <div class="dropdown_scrollbar" data-simplebar>
                        <div class="drop_headline">
                          <h4>Notifications </h4>
                          <div class="btn_action">
                            <a href="#">
                              <i
                                class="icon-feather-settings"
                                uk-tooltip="title: Notifications settings ; pos: left"
                                title=""
                                aria-expanded="false"
                              ></i>
                            </a>
                            <a href="#">
                              <i
                                class="icon-feather-settings"
                                uk-tooltip="title: Notifications settings ; pos: left"
                                title=""
                                aria-expanded="false"
                              ></i>
                            </a>
                          </div>
                        </div>
                        <ul>
                          <li>
                            <a href="#">
                              <div class="drop_avatar">
                                <img src="assets/user/images/avatars/avatar-1.jpg" alt="" />
                              </div>
                              <span class="drop_icon bg-gradient-primary">
                                <i class="icon-feather-thumbs-up"></i>
                              </span>
                              <div class="drop_text">
                                <p>
                                  <strong>Adrian Mohani</strong> Like Your Comment On Video
                                  <span class="text-link">Learn Prototype Faster </span>
                                </p>
                                <time> 2 hours ago </time>
                              </div>
                            </a>
                          </li>
                          <li class="not-read">
                            <a href="#">
                              <div class="drop_avatar status-online">
                                <img src="assets/user/images/avatars/avatar-2.jpg" alt="" />
                              </div>
                              <div class="drop_text">
                                <p>
                                  <strong>Stella Johnson</strong> Replay Your Comments in
                                  <span class="text-link">Adobe XD Tutorial</span>
                                </p>
                                <time> 9 hours ago </time>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div class="drop_avatar">
                                <img src="assets/user/images/avatars/avatar-3.jpg" alt="" />
                              </div>
                              <span class="drop_icon bg-gradient-primary">
                                <i class="icon-feather-thumbs-up"></i>
                              </span>
                              <div class="drop_text">
                                <p>
                                  <strong>Alex Dolgove</strong> Added New Review In Video
                                  <span class="text-link">Full Stack PHP Developer</span>
                                </p>
                                <time> 12 hours ago </time>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div class="drop_avatar">
                                <img src="assets/user/images/avatars/avatar-1.jpg" alt="" />
                              </div>
                              <div class="drop_text">
                                <p>
                                  <strong>Jonathan Madano</strong> Shared Your Discussion On Video
                                  <span class="text-link">Css Flex Box </span>
                                </p>
                                <time> Yesterday </time>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div class="drop_avatar">
                                <img src="assets/user/images/avatars/avatar-1.jpg" alt="" />
                              </div>
                              <span class="drop_icon bg-gradient-primary">
                                <i class="icon-feather-thumbs-up"></i>
                              </span>
                              <div class="drop_text">
                                <p>
                                  <strong>Adrian Mohani</strong> Like Your Comment On Course
                                  <span class="text-link">Javascript Introduction </span>
                                </p>
                                <time> 2 hours ago </time>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div class="drop_avatar status-online">
                                <img src="assets/user/images/avatars/avatar-2.jpg" alt="" />
                              </div>
                              <div class="drop_text">
                                <p>
                                  <strong>Stella Johnson</strong> Replay Your Comments in
                                  <span class="text-link">Programming for Games</span>
                                </p>
                                <time> 9 hours ago </time>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div class="drop_avatar">
                                <img src="assets/user/images/avatars/avatar-2.jpg" alt="" />
                              </div>
                              <div class="drop_text">
                                <p>
                                  <strong>Stella Johnson</strong> Replay Your Comments in
                                  <span class="text-link">Programming for Games</span>
                                </p>
                                <time> 9 hours ago </time>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div class="drop_avatar">
                                <img src="assets/user/images/avatars/avatar-3.jpg" alt="" />
                              </div>
                              <div class="drop_text">
                                <p>
                                  <strong>Alex Dolgove</strong> Added New Review In Course
                                  <span class="text-link">Full Stack PHP Developer</span>
                                </p>
                                <time> 12 hours ago </time>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div class="drop_avatar">
                                <img src="assets/user/images/avatars/avatar-1.jpg" alt="" />
                              </div>
                              <div class="drop_text">
                                <p>
                                  <strong>Jonathan Madano</strong> Shared Your Discussion On Course
                                  <span class="text-link">Css Flex Box </span>
                                </p>
                                <time> Yesterday </time>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div class="drop_avatar">
                                <img src="assets/user/images/avatars/avatar-1.jpg" alt="" />
                              </div>
                              <div class="drop_text">
                                <p>
                                  <strong>Adrian Mohani</strong> Like Your Comment On Course
                                  <span class="text-link">Javascript Introduction </span>
                                </p>
                                <time> 2 hours ago </time>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div class="drop_avatar">
                                <img src="assets/user/images/avatars/avatar-2.jpg" alt="" />
                              </div>
                              <div class="drop_text">
                                <p>
                                  <strong>Stella Johnson</strong> Replay Your Comments in
                                  <span class="text-link">Programming for Games</span>
                                </p>
                                <time> 9 hours ago </time>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/*<!-- Message --> */}
                    <a href="#" class="is_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                      <span>4</span>
                    </a>
                    <div uk-drop="mode: click" class="header_dropdown is_message">
                      <div class="dropdown_scrollbar" data-simplebar>
                        <div class="drop_headline">
                          <h4>Messages </h4>
                          <div class="btn_action">
                            <a href="#">
                              <i
                                class="icon-feather-settings"
                                uk-tooltip="title: Notifications settings ; pos: left"
                                title=""
                                aria-expanded="false"
                              ></i>
                            </a>
                            <a href="#">
                              <i
                                class="icon-feather-settings"
                                uk-tooltip="title: Notifications settings ; pos: left"
                                title=""
                                aria-expanded="false"
                              ></i>
                            </a>
                          </div>
                        </div>
                        <input type="text" class="uk-input" placeholder="Search in Messages" />
                        <ul>
                          <li class="un-read">
                            <a href="#">
                              <div class="drop_avatar">
                                <img src="assets/user/images/avatars/avatar-7.jpg" alt="" />
                              </div>
                              <div class="drop_text">
                                <strong> Stella Johnson </strong> <time>12:43 PM</time>
                                <p> Alex will explain you how ... </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div class="drop_avatar">
                                <img src="assets/user/images/avatars/avatar-1.jpg" alt="" />
                              </div>
                              <div class="drop_text">
                                <strong> Adrian Mohani </strong> <time> 6:43 PM</time>
                                <p> Thanks for The Answer sit amet... </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div class="drop_avatar">
                                <img src="assets/user/images/avatars/avatar-6.jpg" alt="" />
                              </div>
                              <div class="drop_text">
                                <strong>Alia Dolgove </strong> <time> Wed </time>
                                <p> Alia just joined Messenger! </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div class="drop_avatar">
                                <img src="assets/user/images/avatars/avatar-5.jpg" alt="" />
                              </div>
                              <div class="drop_text">
                                <strong> Jonathan Madano </strong> <time> Sun</time>
                                <p> Replay Your Comments insit amet consectetur </p>
                              </div>
                            </a>
                          </li>
                          <li class="un-read">
                            <a href="#">
                              <div class="drop_avatar">
                                <img src="assets/user/images/avatars/avatar-2.jpg" alt="" />
                              </div>
                              <div class="drop_text">
                                <strong> Stella Johnson </strong> <time>12:43 PM</time>
                                <p> Alex will explain you how ... </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div class="drop_avatar">
                                <img src="assets/user/images/avatars/avatar-1.jpg" alt="" />
                              </div>
                              <div class="drop_text">
                                <strong> Adrian Mohani </strong> <time> 6:43 PM</time>
                                <p> Thanks for The Answer sit amet... </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div class="drop_avatar">
                                <img src="assets/user/images/avatars/avatar-3.jpg" alt="" />
                              </div>
                              <div class="drop_text">
                                <strong>Alia Dolgove </strong> <time> Wed </time>
                                <p> Alia just joined Messenger! </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div class="drop_avatar">
                                <img src="assets/user/images/avatars/avatar-4.jpg" alt="" />
                              </div>
                              <div class="drop_text">
                                <strong> Jonathan Madano </strong> <time> Sun</time>
                                <p> Replay Your Comments insit amet consectetur </p>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a href="#" class="see-all">
                        See all in Messages
                      </a>
                    </div>

                    <a href="#">
                      <img src="assets/user/images/avatars/avatar-2.jpg" class="is_avatar" alt="" />
                    </a>
                    <div uk-drop="mode: click;offset:5" class="header_dropdown profile_dropdown">
                      <Link to={"/profile"} class="user">
                        <div class="user_avatar">
                          <img src="assets/user/images/avatars/avatar-2.jpg" alt="" />
                        </div>
                        <div class="user_name">
                          <div> Stella Johnson </div>
                          <span> @stella </span>
                        </div>
                      </Link>
                      <hr class="border-gray-100" />
                      <a href="page-setting.html">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        My Account
                      </a>
                      <a href="group-feed.html">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Manage Pages
                      </a>
                      <a href="group-feed.html">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                          <path
                            fill-rule="evenodd"
                            d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        My Billing
                      </a>
                      <a href="#" id="night-mode" class="btn-night-mode">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                        Night mode
                        <span class="btn-night-mode-switch">
                          <span class="uk-switch-button"></span>
                        </span>
                      </a>
                      <a href="group-feed.html">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          ></path>
                        </svg>
                        Log Out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/*  <!-- sidebar -->*/}

          <div class="sidebar">
            <div class="sidebar_header">
              <img src="assets/user/images/logo.png" alt="" />
              <img src="assets/user/images/logo-icon.html" class="logo-icon" alt="" />

              <span
                class="btn-mobile"
                uk-toggle="target: #wrapper ; cls: is-collapse is-active"
              ></span>
            </div>

            <div class="sidebar_inner" data-simplebar>
              <ul>
                <li class="active">
                  <Link to={"/posts"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="text-blue-600"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <span> Feed </span>
                  </Link>
                </li>
                <li>
                  <a href="pages.html">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="text-yellow-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span> Pages </span>
                  </a>
                </li>

                <li>
                  <a href="groups.html">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="text-blue-500"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    <span> Groups </span>
                  </a>
                </li>
                <li>
                  <a href="courses.html">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="text-green-500"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    <span> Course</span>
                  </a>
                </li>
                <li>
                  <Link to={"/jobs"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="text-pink-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                    <span> Jobs</span>
                  </Link>
                </li>
                <li>
                  <a href="blogs.html">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="text-red-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                        clip-rule="evenodd"
                      />
                      <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                    </svg>
                    <span> Blog</span>
                  </a>
                </li>

                <li id="more-veiw" hidden>
                  <a href="events.html">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="text-yellow-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span> Events </span>
                  </a>
                </li>

                <li id="more-veiw" hidden>
                  <Link to={"/problems"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="text-blue-500"
                    >
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                    <span> forum</span>
                  </Link>
                </li>
              </ul>

              <li class="active-submenu" hidden>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="text-pink-500"
                  >
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
                  <span> Games </span>
                </a>
                <ul>
                  <li>
                    <a href="dashboard-manage-jobs.html">
                      Manage Jobs <span class="nav-tag">3</span>
                    </a>
                  </li>
                  <li>
                    <a href="dashboard-manage-candidates.html">Manage Candidates</a>
                  </li>
                  <li>
                    <a href="dashboard-post-a-job.html">Post a Job</a>
                  </li>
                </ul>
              </li>

              <a
                href="#"
                class="see-mover h-10 flex my-1 pl-2 rounded-xl text-gray-600"
                uk-toggle="target: #more-veiw; animation: uk-animation-fade"
              >
                <span class="w-full flex items-center" id="more-veiw">
                  <svg
                    class="  bg-gray-100 mr-2 p-0.5 rounded-full text-lg w-7"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  See More
                </span>
                <span class="w-full flex items-center" id="more-veiw" hidden>
                  <svg
                    class="bg-gray-100 mr-2 p-0.5 rounded-full text-lg w-7"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  See Less
                </span>
              </a>

              <hr />

              <h3 class="text-lg mt-3 font-semibold ml-2 is-title"> Contacts </h3>

              <div class="contact-list mt-2 ml-1">
                <a href="feed.html">
                  <div class="contact-avatar">
                    <img src="assets/user/images/avatars/avatar-1.jpg" alt="" />
                    <span class="user_status status_online"></span>
                  </div>
                  <div class="contact-username"> Dennis Han</div>
                </a>
                <a href="feed.html">
                  <div class="contact-avatar">
                    <img src="assets/user/images/avatars/avatar-2.jpg" alt="" />
                    <span class="user_status"></span>
                  </div>
                  <div class="contact-username"> Erica Jones</div>
                </a>
                <a href="feed.html">
                  <div class="contact-avatar">
                    <img src="assets/user/images/avatars/avatar-7.jpg" alt="" />
                  </div>
                  <div class="contact-username">Stella Johnson</div>
                </a>
                <a href="feed.html">
                  <div class="contact-avatar">
                    <img src="assets/user/images/avatars/avatar-4.jpg" alt="" />
                  </div>
                  <div class="contact-username"> Alex Dolgove</div>
                </a>
              </div>

              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
