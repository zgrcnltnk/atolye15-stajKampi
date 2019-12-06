import React from "react";
import { connect } from "react-redux";
import { addToAnswers } from "../reduxlayer/actions";

const Quest = props => {
  return props.qIndex ? (
    <ul className="list-group">
      {props.questions[props.counter].question}
      {props.questions[props.counter].anwers.map((a, i) => (
        <li key={i} className="list-group-item">
          <button
            className="btn btn-info"
            key={i}
            onClick={() =>
              props.addToAnswers(props.questions[props.counter].question, a)
            }
          >
            {a}
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <ul>Framework seçimi yap..</ul>
  );
};

const mapStateToProps = state => ({
  qIndex: state.qIndex,
  questions: state.questions,
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  addToAnswers: (q, a) => dispatch(addToAnswers(q, a))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quest);
