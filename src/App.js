import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// react-router
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// Firebase
import firebase from "firebase";
import "firebase/auth";

//Components
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";
import { UserContext } from "./context/UserContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

// TODO: Initialize firebase
import FirebaseConfig from "./Config/FirebaseConfig";
firebase.initializeApp(FirebaseConfig);

const App = () => {
  // defining state and state function
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/*" component={PageNotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
