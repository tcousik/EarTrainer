import React from "react";
import ReactDOM from "react-dom";
import questionBank from "./QuestionBank";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";
import "./index.css";

export default class App extends React.Component {
  state = {
    questions: [],
    score: 0,
    responses: 0,
  };

  fetchQuestions = () => {
    questionBank().then((question) => {
      this.setState({
        questions: question,
      });
    });
  };

  evaluate = (response, correct) => {
    if (response === correct) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      responses: this.state.responses < 4 ? this.state.responses + 1 : 4,
    });
  };

  tryAgain = () => {
    this.fetchQuestions();
    this.setState({
      score: 0,
      responses: 0,
    });
  };

  componentDidMount() {
    this.fetchQuestions();
  }

  render() {
    return (
      <div className="container">
        <div className="title">Ear Trainer</div>
        {this.state.responses < 4 &&
          this.state.questions.map(
            ({ question, choices, correct, questionId }) => (
              <QuestionBox
                question={question}
                choices={choices}
                key={questionId}
                chosen={(answer) => this.evaluate(answer, correct)}
              />
            )
          )}

        {this.state.responses === 4 ? (
          <Result score={this.state.score} tryAgain={this.tryAgain} />
        ) : null}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
