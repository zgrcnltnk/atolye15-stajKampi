import React from "react";

const QuestionAnswers = props => {
  const answers = props.location.state.answers;

  return answers.map((data, i) => {
    return (
      <div className="jumbotron" key={i}>
        <h1 className="display-5">{data.question}</h1>
        <p className="lead">{data.answer}</p>
      </div>
    );
  });
};

const Comment = props => {
  const comment = props.location.state.comment;
  return (
    <div className="jumbotron">
      <h3 className="text-monospace">Yorum : "{comment}"</h3>
    </div>
  );
};

const SubmissionScreen = props => {
  return (
    <div>
      {QuestionAnswers(props)}
      {Comment(props)}
    </div>
  );
};
export default SubmissionScreen;
