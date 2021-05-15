import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";
import Contact from "../components/Contact";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Work from "../components/Work";

const Dashboard = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/work" component={Work} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Dashboard;
