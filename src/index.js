import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Intervals from "./components/Quizzes/intervals";
import Chords from "./components/Quizzes/chords";
import Scales from "./components/Quizzes/scales";
import IntervalGuide from "./components/Guide/intervals";
import ChordGuide from "./components/Guide/chords";
import ScaleGuide from "./components/Guide/scales";
import Nav from "./components/Nav";
import "./index.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/intervals-quiz" component={Intervals} />
          <Route path="/chords-quiz" component={Chords} />
          <Route path="/scales-quiz" component={Scales} />
          <Route path="/intervals-guide" component={IntervalGuide} />
          <Route path="/chords-guide" component={ChordGuide} />
          <Route path="/scales-guide" component={ScaleGuide} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="title">
    <h2>Ear Trainer</h2>
    <h4>Tejas Cousik</h4>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
