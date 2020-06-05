import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import Layout from "../src/components/Layout";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import Test from "./pages/test/A";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      {/* <Layout> */}
      <Switch>
        <Redirect exact from="/" to="/Test" />,
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/about" component={About} />
        <Route path="/test" component={Test} />
      </Switch>
      {/* </Layout> */}
    </Router>
  );
};

export default App;
