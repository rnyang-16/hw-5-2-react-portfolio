import React from "react";
import info from "./info.json";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import DataAreaContext from "./utils/DataAreaContext";

function App() {
  return (
    <Router>
      <div>
        <DataAreaContext.Provider
        value={{ info }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/index" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        </DataAreaContext.Provider>
      </div>
    </Router>
  );
}

export default App;
