import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Layout from "../src/components/Layout";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/about" component={About} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
