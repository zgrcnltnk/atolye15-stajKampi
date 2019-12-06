import React, { useState } from "react";
import { connect } from "react-redux";
import { addToQuestions, addToAnswers } from "./reduxlayer/actions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SubmissionScreen from "./components/SubmissionScreen";
import "./App.css";

function App(props) {
  const [counter, setCounter] = useState(0);
  const [other, showOther] = useState(false);
  const [submitButtonVis, setSubmitButtonVis] = useState(true);

  const OtherOption = props => {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button
            className="btn btn-outline-success"
            type="button"
            disabled={submitButtonVis}
            onClick={() => {}}
          >
            Gönder
          </button>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Yorum yaz.."
          onChange={e => {
            if (e.target.value !== "") setSubmitButtonVis(false);
            else setSubmitButtonVis(true);
          }}
        />
      </div>
    );
  };

  const Quest = props => {
    return props.qIndex ? (
      <ul className="list-group">
        {props.questions[counter].question}
        {props.questions[counter].anwers.map((a, i) => (
          <li key={i} className="list-group-item">
            <button
              className="btn btn-info"
              key={i}
              onClick={() => {
                setCounter(counter + 1);
                props.addToAnswers(props.questions[counter].question, a);
              }}
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
    <Router>
      <div className="App">
        {Framework(props)}
        {counter < props.qIndex && Quest(props)}
        {((counter !== 0 && counter === props.qIndex) || other === true) &&
          OtherOption(props)}
        <Route path="/submission" component={SubmissionScreen} />
      </div>
    </Router>
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
