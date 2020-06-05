import React from "react";
import scaleBank from "../Banks/scaleBank";
import QuestionBox from "../QuestionBox";
import Result from "../Result";
import "../../index.css";

export default class Scale extends React.Component {
  state = {
    questions: [],
    score: 0,
    responses: 0,
  };

  fetchScales = () => {
    scaleBank().then((scale) => {
      this.setState({
        questions: scale,
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
    this.fetchScales();
    this.setState({
      score: 0,
      responses: 0,
    });
  };

  componentDidMount() {
    this.fetchScales();
  }

  render() {
    return (
      <div className="container">
        <div className="title">Scales</div>
        {this.state.responses < 4 &&
          this.state.questions.map(
            ({ question, soundURL, choices, correct, questionId }) => (
              <QuestionBox
                question={question}
                soundURL={soundURL}
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
