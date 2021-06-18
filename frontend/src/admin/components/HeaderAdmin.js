/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <body style={{ backgroundColor: "#152036" }}>
        <div class="left-sidebar-pro">
          <nav id="sidebar" class="">
            <div class="sidebar-header">
              <strong>
                <img src="assets/admin/img/logo/logosn.png" alt="" />
              </strong>
            </div>
            <div class="nalika-profile">
              <div class="profile-dtl">
                <a href="#"></a>
                <h2>
                  Lakian <span class="min-dtn">Das</span>
                </h2>
              </div>
              <div class="profile-social-dtl">
                <ul class="dtl-social">
                  <li>
                    <a href="#">
                      <i class="icon nalika-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon nalika-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon nalika-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="left-custom-menu-adp-wrap comment-scrollbar">
              <nav class="sidebar-nav left-sidebar-menu-pro">
                <ul class="metismenu" id="menu1">
                  <li class="active">
                    <a
                      class="has-arrow"
                      data-toggle="collapse"
                      href="#users"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <i class="icon nalika-home icon-wrap"></i>
                      <span class="mini-click-non">Users</span>
                    </a>
                    <ul class="submenu-angle" aria-expanded="false" id="users">
                      <li>
                        <a title="Dashboard v.1" href="#">
                          <span class="mini-sub-pro">#</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      class="has-arrow"
                      data-toggle="collapse"
                      href="#jobs"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <i class="icon nalika-mail icon-wrap"></i>
                      <span class="mini-click-non">Jobs </span>
                    </a>
                    <ul class="submenu-angle" aria-expanded="false" id="jobs">
                      <li>
                        <Link to={"/jobsAdmin"} title="Inbox" href="mailbox.html">
                          <span class="mini-sub-pro">Jobs List</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      class="has-arrow"
                      data-toggle="collapse"
                      href="#posts"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <i class="icon nalika-mail icon-wrap"></i>
                      <span class="mini-click-non">Posts </span>
                    </a>
                    <ul class="submenu-angle" aria-expanded="false" id="posts">
                      <li>
                        <Link to={"/postsAdmin"} title="Inbox" href="mailbox.html">
                          <span class="mini-sub-pro">Posts List</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      class="has-arrow"
                      data-toggle="collapse"
                      href="#problems"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <i class="icon nalika-mail icon-wrap"></i>
                      <span class="mini-click-non">Problems </span>
                    </a>
                    <ul class="submenu-angle" aria-expanded="false" id="problems">
                      <li>
                        <Link to={"/problemsAdmin"} title="Inbox" href="mailbox.html">
                          <span class="mini-sub-pro">Problems List</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      class="has-arrow"
                      data-toggle="collapse"
                      href="#postcategories"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <i class="icon nalika-mail icon-wrap"></i>
                      <span class="mini-click-non">Post Categories </span>
                    </a>
                    <ul class="submenu-angle" aria-expanded="false" id="postcategories">
                      <li>
                        <Link to={"/categoriespAdmin"} title="Inbox" href="mailbox.html">
                          <span class="mini-sub-pro">Category List</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/chart"} title="Inbox" href="mailbox.html">
                          <span class="mini-sub-pro">Category Statistics</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      class="has-arrow"
                      data-toggle="collapse"
                      href="#cours"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <i class="icon nalika-diamond icon-wrap"></i>
                      <span class="mini-click-non">Courses</span>
                    </a>
                    <ul class="submenu-angle" aria-expanded="false" id="cours">
                      <li>
                        <a title="Google Map" href="google-map.html">
                          <span class="mini-sub-pro">#</span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a class="has-arrow" href="mailbox.html" aria-expanded="false">
                      <i class="icon nalika-table icon-wrap"></i>
                      <span class="mini-click-non">Chatt</span>
                    </a>
                    <ul class="submenu-angle" aria-expanded="false">
                      <li>
                        <a title="Peity Charts" href="static-table.html">
                          <span class="mini-sub-pro">#</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a class="has-arrow" href="mailbox.html" aria-expanded="false">
                      <i class="icon nalika-forms icon-wrap"></i>
                      <span class="mini-click-non">Workers</span>
                    </a>
                    <ul class="submenu-angle" aria-expanded="false">
                      <li>
                        <a title="Basic Form Elements" href="basic-form-element.html">
                          <span class="mini-sub-pro">#</span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li id="removable">
                    <a class="has-arrow" href="#" aria-expanded="false">
                      <i class="icon nalika-new-file icon-wrap"></i>
                      <span class="mini-click-non">Pages</span>
                    </a>
                    <ul class="submenu-angle" aria-expanded="false">
                      <li>
                        <a title="Login" href="login.html">
                          <span class="mini-sub-pro">Login</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </nav>
        </div>
        <div class="all-content-wrapper">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="logo-pro">
                  <a href="index.html"></a>
                </div>
              </div>
            </div>
          </div>
          <div class="header-advance-area">
            <div class="header-top-area">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="header-top-wraper">
                      <div class="row">
                        <div class="col-lg-1 col-md-0 col-sm-1 col-xs-12">
                          <div class="menu-switcher-pro">
                            <button
                              type="button"
                              id="sidebarCollapse"
                              class="btn bar-button-pro header-drl-controller-btn btn-info navbar-btn"
                            >
                              <i class="icon nalika-menu-task"></i>
                            </button>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-7 col-sm-6 col-xs-12">
                          <div class="header-top-menu tabl-d-n">
                            <div class="breadcome-heading"></div>
                          </div>
                        </div>
                        <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                          <div class="header-right-info">
                            <ul
                              class="nav navbar-nav mai-top-nav header-right-menu"
                              style={{ flexDirection: "row" }}
                            >
                              <li class="nav-item dropdown">
                                <a
                                  href="#"
                                  data-toggle="dropdown"
                                  role="button"
                                  aria-expanded="false"
                                  class="nav-link dropdown-toggle"
                                >
                                  <i
                                    class="icon nalika-mail nalika-chat-pro"
                                    aria-hidden="true"
                                  ></i>
                                  <span class="indicator-ms"></span>
                                </a>
                                <div
                                  role="menu"
                                  class="author-message-top dropdown-menu animated zoomIn"
                                >
                                  <div class="message-single-top">
                                    <h1>Message</h1>
                                  </div>
                                  <ul class="message-menu">
                                    <li>
                                      <a href="#">
                                        <div class="message-img">
                                          <img src="assets/admin/img/contact/1.jpg" alt="" />
                                        </div>
                                        <div class="message-content">
                                          <span class="message-date">16 Sept</span>
                                          <h2>Advanda Cro</h2>
                                          <p>Please done this project as soon possible.</p>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <div class="message-img">
                                          <img src="assets/admin/img/contact/4.jpg" alt="" />
                                        </div>
                                        <div class="message-content">
                                          <span class="message-date">16 Sept</span>
                                          <h2>Sulaiman din</h2>
                                          <p>Please done this project as soon possible.</p>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <div class="message-img">
                                          <img src="assets/admin/img/contact/3.jpg" alt="" />
                                        </div>
                                        <div class="message-content">
                                          <span class="message-date">16 Sept</span>
                                          <h2>Victor Jara</h2>
                                          <p>Please done this project as soon possible.</p>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <div class="message-img">
                                          <img src="assets/admin/img/contact/2.jpg" alt="" />
                                        </div>
                                        <div class="message-content">
                                          <span class="message-date">16 Sept</span>
                                          <h2>Victor Jara</h2>
                                          <p>Please done this project as soon possible.</p>
                                        </div>
                                      </a>
                                    </li>
                                  </ul>
                                  <div class="message-view">
                                    <a href="#">View All Messages</a>
                                  </div>
                                </div>
                              </li>
                              <li class="nav-item">
                                <a
                                  href="#"
                                  data-toggle="dropdown"
                                  role="button"
                                  aria-expanded="false"
                                  class="nav-link dropdown-toggle"
                                >
                                  <i class="icon nalika-alarm" aria-hidden="true"></i>
                                  <span class="indicator-nt"></span>
                                </a>
                                <div
                                  role="menu"
                                  class="notification-author dropdown-menu animated zoomIn"
                                >
                                  <div class="notification-single-top">
                                    <h1>Notifications</h1>
                                  </div>
                                  <ul class="notification-menu">
                                    <li>
                                      <a href="#">
                                        <div class="notification-icon">
                                          <i class="icon nalika-tick" aria-hidden="true"></i>
                                        </div>
                                        <div class="notification-content">
                                          <span class="notification-date">16 Sept</span>
                                          <h2>Advanda Cro</h2>
                                          <p>Please done this project as soon possible.</p>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <div class="notification-icon">
                                          <i class="icon nalika-cloud" aria-hidden="true"></i>
                                        </div>
                                        <div class="notification-content">
                                          <span class="notification-date">16 Sept</span>
                                          <h2>Sulaiman din</h2>
                                          <p>Please done this project as soon possible.</p>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <div class="notification-icon">
                                          <i class="icon nalika-folder" aria-hidden="true"></i>
                                        </div>
                                        <div class="notification-content">
                                          <span class="notification-date">16 Sept</span>
                                          <h2>Victor Jara</h2>
                                          <p>Please done this project as soon possible.</p>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <div class="notification-icon">
                                          <i class="icon nalika-bar-chart" aria-hidden="true"></i>
                                        </div>
                                        <div class="notification-content">
                                          <span class="notification-date">16 Sept</span>
                                          <h2>Victor Jara</h2>
                                          <p>Please done this project as soon possible.</p>
                                        </div>
                                      </a>
                                    </li>
                                  </ul>
                                  <div class="notification-view">
                                    <a href="#">View All Notification</a>
                                  </div>
                                </div>
                              </li>
                              <li class="nav-item">
                                <a
                                  href="#"
                                  data-toggle="dropdown"
                                  role="button"
                                  aria-expanded="false"
                                  class="nav-link dropdown-toggle"
                                >
                                  <i
                                    class="icon nalika-user nalika-user-rounded header-riht-inf"
                                    aria-hidden="true"
                                  ></i>
                                  <span class="admin-name">Advanda Cro</span>
                                  <i class="icon nalika-down-arrow nalika-angle-dw nalika-icon"></i>
                                </a>
                                <ul
                                  role="menu"
                                  class="dropdown-header-top author-log dropdown-menu animated zoomIn"
                                >
                                  <li>
                                    <a href="register.html">
                                      <span class="icon nalika-home author-log-ic"></span> Register
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <span class="icon nalika-user author-log-ic"></span> My
                                      Profile
                                    </a>
                                  </li>
                                  <li>
                                    <a href="lock.html">
                                      <span class="icon nalika-diamond author-log-ic"></span> Lock
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <span class="icon nalika-settings author-log-ic"></span>
                                      Settings
                                    </a>
                                  </li>
                                  <li>
                                    <a href="login.html">
                                      <span class="icon nalika-unlocked author-log-ic"></span> Log
                                      Out
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li class="nav-item nav-setting-open">
                                <a
                                  href="#"
                                  data-toggle="dropdown"
                                  role="button"
                                  aria-expanded="false"
                                  class="nav-link dropdown-toggle"
                                >
                                  <i class="icon nalika-menu-task"></i>
                                </a>

                                <div
                                  role="menu"
                                  class="admintab-wrap menu-setting-wrap menu-setting-wrap-bg dropdown-menu animated zoomIn"
                                >
                                  <ul class="nav nav-tabs custon-set-tab">
                                    <li class="active">
                                      <a data-toggle="tab" href="#Notes">
                                        News
                                      </a>
                                    </li>
                                    <li>
                                      <a data-toggle="tab" href="#Projects">
                                        Activity
                                      </a>
                                    </li>
                                    <li>
                                      <a data-toggle="tab" href="#Settings">
                                        Settings
                                      </a>
                                    </li>
                                  </ul>

                                  <div class="tab-content custom-bdr-nt">
                                    <div id="Notes" class="tab-pane fade in active">
                                      <div class="notes-area-wrap">
                                        <div class="note-heading-indicate">
                                          <h2>
                                            <i class="icon nalika-chat"></i> Latest News
                                          </h2>
                                          <p>You have 10 New News.</p>
                                        </div>
                                        <div class="notes-list-area notes-menu-scrollbar">
                                          <ul class="notes-menu-list">
                                            <li>
                                              <a href="#">
                                                <div class="notes-list-flow">
                                                  <div class="notes-img">
                                                    <img
                                                      src="assets/admin/img/contact/4.jpg"
                                                      alt=""
                                                    />
                                                  </div>
                                                  <div class="notes-content">
                                                    <p>
                                                      The point of using Lorem Ipsum is that it has
                                                      a more-or-less normal.
                                                    </p>
                                                    <span>Yesterday 2:45 pm</span>
                                                  </div>
                                                </div>
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#">
                                                <div class="notes-list-flow">
                                                  <div class="notes-img">
                                                    <img
                                                      src="assets/admin/img/contact/1.jpg"
                                                      alt=""
                                                    />
                                                  </div>
                                                  <div class="notes-content">
                                                    <p>
                                                      The point of using Lorem Ipsum is that it has
                                                      a more-or-less normal.
                                                    </p>
                                                    <span>Yesterday 2:45 pm</span>
                                                  </div>
                                                </div>
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#">
                                                <div class="notes-list-flow">
                                                  <div class="notes-img">
                                                    <img
                                                      src="assets/admin/img/contact/2.jpg"
                                                      alt=""
                                                    />
                                                  </div>
                                                  <div class="notes-content">
                                                    <p>
                                                      The point of using Lorem Ipsum is that it has
                                                      a more-or-less normal.
                                                    </p>
                                                    <span>Yesterday 2:45 pm</span>
                                                  </div>
                                                </div>
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#">
                                                <div class="notes-list-flow">
                                                  <div class="notes-img">
                                                    <img
                                                      src="assets/admin/img/contact/3.jpg"
                                                      alt=""
                                                    />
                                                  </div>
                                                  <div class="notes-content">
                                                    <p>
                                                      The point of using Lorem Ipsum is that it has
                                                      a more-or-less normal.
                                                    </p>
                                                    <span>Yesterday 2:45 pm</span>
                                                  </div>
                                                </div>
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#">
                                                <div class="notes-list-flow">
                                                  <div class="notes-img">
                                                    <img
                                                      src="assets/admin/img/contact/4.jpg"
                                                      alt=""
                                                    />
                                                  </div>
                                                  <div class="notes-content">
                                                    <p>
                                                      The point of using Lorem Ipsum is that it has
                                                      a more-or-less normal.
                                                    </p>
                                                    <span>Yesterday 2:45 pm</span>
                                                  </div>
                                                </div>
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#">
                                                <div class="notes-list-flow">
                                                  <div class="notes-img">
                                                    <img
                                                      src="assets/admin/img/contact/1.jpg"
                                                      alt=""
                                                    />
                                                  </div>
                                                  <div class="notes-content">
                                                    <p>
                                                      The point of using Lorem Ipsum is that it has
                                                      a more-or-less normal.
                                                    </p>
                                                    <span>Yesterday 2:45 pm</span>
                                                  </div>
                                                </div>
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#">
                                                <div class="notes-list-flow">
                                                  <div class="notes-img">
                                                    <img
                                                      src="assets/admin/img/contact/2.jpg"
                                                      alt=""
                                                    />
                                                  </div>
                                                  <div class="notes-content">
                                                    <p>
                                                      The point of using Lorem Ipsum is that it has
                                                      a more-or-less normal.
                                                    </p>
                                                    <span>Yesterday 2:45 pm</span>
                                                  </div>
                                                </div>
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#">
                                                <div class="notes-list-flow">
                                                  <div class="notes-img">
                                                    <img
                                                      src="assets/admin/img/contact/1.jpg"
                                                      alt=""
                                                    />
                                                  </div>
                                                  <div class="notes-content">
                                                    <p>
                                                      The point of using Lorem Ipsum is that it has
                                                      a more-or-less normal.
                                                    </p>
                                                    <span>Yesterday 2:45 pm</span>
                                                  </div>
                                                </div>
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#">
                                                <div class="notes-list-flow">
                                                  <div class="notes-img">
                                                    <img
                                                      src="assets/admin/img/contact/2.jpg"
                                                      alt=""
                                                    />
                                                  </div>
                                                  <div class="notes-content">
                                                    <p>
                                                      The point of using Lorem Ipsum is that it has
                                                      a more-or-less normal.
                                                    </p>
                                                    <span>Yesterday 2:45 pm</span>
                                                  </div>
                                                </div>
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#">
                                                <div class="notes-list-flow">
                                                  <div class="notes-img">
                                                    <img
                                                      src="assets/admin/img/contact/3.jpg"
                                                      alt=""
                                                    />
                                                  </div>
                                                  <div class="notes-content">
                                                    <p>
                                                      The point of using Lorem Ipsum is that it has
                                                      a more-or-less normal.
                                                    </p>
                                                    <span>Yesterday 2:45 pm</span>
                                                  </div>
                                                </div>
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>

                                    <div id="Settings" class="tab-pane fade">
                                      <div class="setting-panel-area">
                                        <div class="note-heading-indicate">
                                          <h2>
                                            <i class="icon nalika-gear"></i> Settings Panel
                                          </h2>
                                          <p> You have 20 Settings. 5 not completed.</p>
                                        </div>
                                        <ul class="setting-panel-list">
                                          <li>
                                            <div class="checkbox-setting-pro">
                                              <div class="checkbox-title-pro">
                                                <h2>Show notifications</h2>
                                                <div class="ts-custom-check">
                                                  <div class="onoffswitch">
                                                    <input
                                                      type="checkbox"
                                                      name="collapsemenu"
                                                      class="onoffswitch-checkbox"
                                                      id="example"
                                                    />
                                                    <label class="onoffswitch-label" for="example">
                                                      <span class="onoffswitch-inner"></span>
                                                      <span class="onoffswitch-switch"></span>
                                                    </label>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <div class="checkbox-setting-pro">
                                              <div class="checkbox-title-pro">
                                                <h2>Disable Chat</h2>
                                                <div class="ts-custom-check">
                                                  <div class="onoffswitch">
                                                    <input
                                                      type="checkbox"
                                                      name="collapsemenu"
                                                      class="onoffswitch-checkbox"
                                                      id="example3"
                                                    />
                                                    <label class="onoffswitch-label" for="example3">
                                                      <span class="onoffswitch-inner"></span>
                                                      <span class="onoffswitch-switch"></span>
                                                    </label>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <div class="checkbox-setting-pro">
                                              <div class="checkbox-title-pro">
                                                <h2>Enable history</h2>
                                                <div class="ts-custom-check">
                                                  <div class="onoffswitch">
                                                    <input
                                                      type="checkbox"
                                                      name="collapsemenu"
                                                      class="onoffswitch-checkbox"
                                                      id="example4"
                                                    />
                                                    <label class="onoffswitch-label" for="example4">
                                                      <span class="onoffswitch-inner"></span>
                                                      <span class="onoffswitch-switch"></span>
                                                    </label>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <div class="checkbox-setting-pro">
                                              <div class="checkbox-title-pro">
                                                <h2>Show charts</h2>
                                                <div class="ts-custom-check">
                                                  <div class="onoffswitch">
                                                    <input
                                                      type="checkbox"
                                                      name="collapsemenu"
                                                      class="onoffswitch-checkbox"
                                                      id="example7"
                                                    />
                                                    <label class="onoffswitch-label" for="example7">
                                                      <span class="onoffswitch-inner"></span>
                                                      <span class="onoffswitch-switch"></span>
                                                    </label>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <div class="checkbox-setting-pro">
                                              <div class="checkbox-title-pro">
                                                <h2>Update everyday</h2>
                                                <div class="ts-custom-check">
                                                  <div class="onoffswitch">
                                                    <input
                                                      type="checkbox"
                                                      name="collapsemenu"
                                                      checked=""
                                                      class="onoffswitch-checkbox"
                                                      id="example2"
                                                    />
                                                    <label class="onoffswitch-label" for="example2">
                                                      <span class="onoffswitch-inner"></span>
                                                      <span class="onoffswitch-switch"></span>
                                                    </label>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <div class="checkbox-setting-pro">
                                              <div class="checkbox-title-pro">
                                                <h2>Global search</h2>
                                                <div class="ts-custom-check">
                                                  <div class="onoffswitch">
                                                    <input
                                                      type="checkbox"
                                                      name="collapsemenu"
                                                      checked=""
                                                      class="onoffswitch-checkbox"
                                                      id="example6"
                                                    />
                                                    <label class="onoffswitch-label" for="example6">
                                                      <span class="onoffswitch-inner"></span>
                                                      <span class="onoffswitch-switch"></span>
                                                    </label>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <div class="checkbox-setting-pro">
                                              <div class="checkbox-title-pro">
                                                <h2>Offline users</h2>
                                                <div class="ts-custom-check">
                                                  <div class="onoffswitch">
                                                    <input
                                                      type="checkbox"
                                                      name="collapsemenu"
                                                      checked=""
                                                      class="onoffswitch-checkbox"
                                                      id="example5"
                                                    />
                                                    <label class="onoffswitch-label" for="example5">
                                                      <span class="onoffswitch-inner"></span>
                                                      <span class="onoffswitch-switch"></span>
                                                    </label>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Mobile Menu start --> */}

            <div class="mobile-menu-area">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="mobile-menu">
                      <nav id="dropdown">
                        <ul class="mobile-menu-nav">
                          <li>
                            <a data-toggle="collapse" data-target="#Charts" href="#">
                              Home
                              <span class="admin-project-icon nalika-icon nalika-down-arrow"></span>
                            </a>
                            <ul class="collapse dropdown-header-top">
                              <li>
                                <a href="index.html">Dashboard v.1</a>
                              </li>
                              <li>
                                <a href="index-1.html">Dashboard v.2</a>
                              </li>
                              <li>
                                <a href="index-3.html">Dashboard v.3</a>
                              </li>
                              <li>
                                <a href="product-list.html">Product List</a>
                              </li>
                              <li>
                                <a href="product-edit.html">Product Edit</a>
                              </li>
                              <li>
                                <a href="product-detail.html">Product Detail</a>
                              </li>
                              <li>
                                <a href="product-cart.html">Product Cart</a>
                              </li>
                              <li>
                                <a href="product-payment.html">Product Payment</a>
                              </li>
                              <li>
                                <a href="analytics.html">Analytics</a>
                              </li>
                              <li>
                                <a href="widgets.html">Widgets</a>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <a data-toggle="collapse" data-target="#Miscellaneousmob" href="#">
                              Interface
                              <span class="admin-project-icon nalika-icon nalika-down-arrow"></span>
                            </a>
                            <ul id="Miscellaneousmob" class="collapse dropdown-header-top">
                              <li>
                                <a href="google-map.html">Google Map</a>
                              </li>
                              <li>
                                <a href="data-maps.html">Data Maps</a>
                              </li>
                              <li>
                                <a href="pdf-viewer.html">Pdf Viewer</a>
                              </li>
                              <li>
                                <a href="x-editable.html">X-Editable</a>
                              </li>
                              <li>
                                <a href="code-editor.html">Code Editor</a>
                              </li>
                              <li>
                                <a href="tree-view.html">Tree View</a>
                              </li>
                              <li>
                                <a href="preloader.html">Preloader</a>
                              </li>
                              <li>
                                <a href="images-cropper.html">Images Cropper</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a data-toggle="collapse" data-target="#Chartsmob" href="#">
                              Charts
                              <span class="admin-project-icon nalika-icon nalika-down-arrow"></span>
                            </a>
                            <ul id="Chartsmob" class="collapse dropdown-header-top">
                              <li>
                                <a href="bar-charts.html">Bar Charts</a>
                              </li>
                              <li>
                                <a href="line-charts.html">Line Charts</a>
                              </li>
                              <li>
                                <a href="area-charts.html">Area Charts</a>
                              </li>
                              <li>
                                <a href="rounded-chart.html">Rounded Charts</a>
                              </li>
                              <li>
                                <a href="c3.html">C3 Charts</a>
                              </li>
                              <li>
                                <a href="sparkline.html">Sparkline Charts</a>
                              </li>
                              <li>
                                <a href="peity.html">Peity Charts</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a data-toggle="collapse" data-target="#Tablesmob" href="#">
                              Tables
                              <span class="admin-project-icon nalika-icon nalika-down-arrow"></span>
                            </a>
                            <ul id="Tablesmob" class="collapse dropdown-header-top">
                              <li>
                                <a href="static-table.html">Static Table</a>
                              </li>
                              <li>
                                <a href="data-table.html">Data Table</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a data-toggle="collapse" data-target="#formsmob" href="#">
                              Forms
                              <span class="admin-project-icon nalika-icon nalika-down-arrow"></span>
                            </a>
                            <ul id="formsmob" class="collapse dropdown-header-top">
                              <li>
                                <a href="basic-form-element.html">Basic Form Elements</a>
                              </li>
                              <li>
                                <a href="advance-form-element.html">Advanced Form Elements</a>
                              </li>
                              <li>
                                <a href="password-meter.html">Password Meter</a>
                              </li>
                              <li>
                                <a href="multi-upload.html">Multi Upload</a>
                              </li>
                              <li>
                                <a href="tinymc.html">Text Editor</a>
                              </li>
                              <li>
                                <a href="dual-list-box.html">Dual List Box</a>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <a data-toggle="collapse" data-target="#Pagemob" href="#">
                              Pages
                              <span class="admin-project-icon nalika-icon nalika-down-arrow"></span>
                            </a>
                            <ul id="Pagemob" class="collapse dropdown-header-top">
                              <li>
                                <a href="login.html">Login</a>
                              </li>
                              <li>
                                <a href="register.html">Register</a>
                              </li>
                              <li>
                                <a href="lock.html">Lock</a>
                              </li>
                              <li>
                                <a href="password-recovery.html">Password Recovery</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Mobile Menu start -->*/}
          </div>
        </div>
      </body>
    );
  }
}
