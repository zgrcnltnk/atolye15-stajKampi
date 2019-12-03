import React, { useState } from "react";
import { connect } from "react-redux";
import { addToQuestions, addToAnswers } from "./reduxlayer/actions";
import "./App.css";

function App(props) {
  const [counter, setCounter] = useState(0);
  const [other, showOther] = useState(false);

  const OtherOption = props => {
    return other === true ? <input type="text" /> : <div></div>;
  };

  const Quest = props => {
    return props.qIndex ? (
      <div>
        {props.questions[counter].question}
        {props.questions[counter].anwers.map((a, i) => (
          <button
            key={i}
            onClick={() => {
              if (counter < props.qIndex - 1) {
                setCounter(counter + 1);
              }
              props.addToAnswers(props.questions[counter].question, a);
            }}
          >
            {a}
          </button>
        ))}
      </div>
    ) : (
      <div>Framework seçimi yap</div>
    );
  };

  const Framework = props => {
    return props.json.map((framework, i) => {
      return (
        <div key={i} className="input-group mb-3">
          <div className="input-group-prepend">
            <div className="input-group-text ">
              <input
                type="checkbox"
                onChange={() => {
                  if (framework.name !== "Diğer")
                    props.addToQuestions(framework.name);
                  else if (framework.name === "Diğer") showOther(true);
                }}
              />
            </div>
          </div>
          <div className="form-control">{framework.name}</div>
        </div>
      );
    });
  };
  return (
    <div className="App">
      {Framework(props)}
      {Quest(props)}
      {OtherOption(props)}
    </div>
  );
}

const mapStateToProps = state => ({
  json: state.data,
  qIndex: state.qIndex,
  questions: state.questions
});

const mapDispatchToProps = dispatch => ({
  addToQuestions: frameworkName => dispatch(addToQuestions(frameworkName)),
  addToAnswers: (q, a) => dispatch(addToAnswers(q, a))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
