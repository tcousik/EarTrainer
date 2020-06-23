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
    <h5 className="home">
      Hello. Welcome to the Ear Trainer App. Please refer to the guides to learn
      the basics of ear training and then test your skills using the quizzes.
    </h5>
    <div className="name">Created By</div>
    <div className="name">Tejas Cousik</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
