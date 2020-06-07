import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Guide from "./components/guide";
import Intervals from "./components/Quizzes/intervals";
import Chords from "./components/Quizzes/chords";
import Scales from "./components/Quizzes/scales";
import Nav from "./components/Nav";
import "./index.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/guide" component={Guide} />
          <Route path="/intervals" component={Intervals} />
          <Route path="/chords" component={Chords} />
          <Route path="/scales" component={Scales} />
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
