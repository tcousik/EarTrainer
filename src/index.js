import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Intervals from "./components/Quizzes/intervals";
import "./index.css";

export default class App extends React.Component {
  state = {
    displayedComponent: "Home",
  };

  render() {
    return (
      <div>
        HEY
        <Router>
          <div>
            <Link to="/intervals">
              <button>INTS</button>
            </Link>
          </div>
          <Switch>
            <Route path="/intervals">
              <Intervals />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
