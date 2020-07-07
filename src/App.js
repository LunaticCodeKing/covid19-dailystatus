import React  from "react";
import Home from "./pages/Home";

import Graph from "./pages/Graph";
import Nav from "./Nav";
import Footer from "./Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          
          <Route path="/graph" component={Graph} />
          
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
