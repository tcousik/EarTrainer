import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Intervals from "./components/Quizzes/intervals";
import Chords from "./components/Quizzes/chords";
import "./index.css";

export default class App extends React.Component {
  state = {
    displayedComponent: "Home",
  };

  render() {
    return (
      <div>
        <Router>
          <div>
            <Link to="/intervals">
              <button>INTERVALS</button>
            </Link>
            <Link to="/chords">
              <button>CHORDS</button>
            </Link>
          </div>
          <Switch>
            <Route path="/intervals">
              <Intervals />
            </Route>
            <Route path="/chords">
              <Chords />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
