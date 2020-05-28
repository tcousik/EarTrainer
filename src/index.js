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

  evaluate = (answer, correct) => {
    if (answer === correct) {
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
        <div className="title">Hey</div>
        {this.state.questions.length > 0 &&
          this.state.responses < 4 &&
          this.state.questions.map(
            ({ question, answers, correct, questionId }) => (
              <QuestionBox
                question={question}
                choices={answers}
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
