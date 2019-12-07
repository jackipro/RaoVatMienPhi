import React, { Fragment, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navbar from "./components/layout/Navbar";
import Homepage from "./components/layout/Homepage";
import Alert from "./components/layout/Alert";
import Tos from "./components/pages/Tos";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import CreateProfile from "./components/profile-form/CreateProfile";
import EditProfile from "./components/profile-form/EditProfile";
import About from "./components/pages/About";
import Mobile from "./components/pages/Mobile";
import AddPost from "./components/post/AddPost";
import AddMobile from "./components/post/AddMobile";
//Redux
import { Provider } from "react-redux";
import { loadUser } from "./actions/auth";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <div className="ui justified container">
            <Alert />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/tos" component={Tos} />
              <Route exact path="/about" component={About} />
              <Route exact path="/mobile" component={Mobile} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
              <PrivateRoute
                exact
                path="/createprofile"
                component={CreateProfile}
              />
              <PrivateRoute exact path="/addpost" component={AddPost} />
              <PrivateRoute exact path="/add-mobile" component={AddMobile} />
            </Switch>
          </div>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
