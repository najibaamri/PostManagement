import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import HeaderAdmin from "./admin/components/HeaderAdmin";
import Header from "./user/components/Header";
import AddJob from "./user/components/Job/AddJob";
import JobDetails from "./user/components/Job/JobDetails";
import Jobs from "./user/components/Job/Jobs";
import Posts from "./user/components/Post/Posts";
import ProfileScreen from "./user/components/Post/ProfileScreen";
import AddProblem from "./user/components/Problem/AddProblem";
import ProblemDetail from "./user/components/Problem/ProblemDetail";
import Problems from "./user/components/Problem/Problems";
import JobDetailsAdmin from "./admin/components/Job/JobDetailsAdmin";
import ListJobs from "./admin/components/Job/ListJobs";
import EditJob from "./user/components/Job/EditJob";
import EditProblem from "./user/components/Problem/EditProblem";
import ListPosts from "./admin/components/Post/ListPosts";
import ListProblems from "./admin/components/Problem/ListProblems";
import ListPostCategory from "./admin/components/PostCategory/ListPostCategory";
import AddCategoryp from "./admin/components/PostCategory/AddCategoryp";
import EditCategoryp from "./admin/components/PostCategory/EditCategoryp";
import Chart from "./admin/components/PostCategory/Chart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/*user */}

        <Header />

        <Switch>
          <Route path="/profile" exact render={(props) => <ProfileScreen {...props} />}></Route>
          <Route path="/problem/:id" exact render={(props) => <ProblemDetail {...props} />}></Route>
          <Route path="/problems" exact render={(props) => <Problems {...props} />}></Route>
          <Route path="/posts" exact render={(props) => <Posts {...props} />}></Route>
          <Route path="/addjob" exact render={(props) => <AddJob {...props} />}></Route>
          <Route path="/addproblem" exact render={(props) => <AddProblem {...props} />}></Route>
          <Route path="/jobs" exact render={(props) => <Jobs {...props} />}></Route>
          <Route path="/job/:id" exact render={(props) => <JobDetails {...props} />}></Route>
          <Route path="/editjob" exact render={(props) => <EditJob {...props} />}></Route>
          <Route path="/editproblem" exact render={(props) => <EditProblem {...props} />}></Route>

          <Route exact render={() => <p>Default rendered page!</p>}></Route>
        </Switch>
        {/*admin */}

        {/*<HeaderAdmin />
        <Switch>
          <Route
            path="/jobDetails/:id"
            exact
            render={(props) => <JobDetailsAdmin {...props} />}
          ></Route>
          <Route path="/jobsAdmin" exact render={(props) => <ListJobs {...props} />}></Route>
          <Route path="/postsAdmin" exact render={(props) => <ListPosts {...props} />}></Route>
          <Route path="/addCategoryp" exact render={(props) => <AddCategoryp {...props} />}></Route>
          <Route
            path="/editCategoryp"
            exact
            render={(props) => <EditCategoryp {...props} />}
          ></Route>
          <Route path="/chart" exact render={(props) => <Chart {...props} />}></Route>
          <Route
            path="/categoriespAdmin"
            exact
            render={(props) => <ListPostCategory {...props} />}
          ></Route>

          <Route
            path="/problemsAdmin"
            exact
            render={(props) => <ListProblems {...props} />}
          ></Route>
        </Switch>*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
