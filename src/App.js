import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import NoMatch from "./components/pages/NoMatch"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Switch>
          <Route exact path="/react-portfolio">
            <About />
          </Route>
          <Route exact path="/react-portfolio/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/react-portfolio/contact">
            <Contact />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}




export default App;
