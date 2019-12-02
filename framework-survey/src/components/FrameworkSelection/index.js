import React from "react";
import * as SurveyData from "../SurveyParticle/SurveyDataGetter";
import { connect } from "react-redux";
import { selectFramework, getQuestions } from "../../reduxlayer/actions";

const Framework = props => {
  return SurveyData.data.map((framework, i) => {
    return (
      <div key={i} className="input-group mb-3">
        <div className="input-group-prepend">
          <div className="input-group-text ">
            <input
              type="checkbox"
              onChange={() => {
                props.selectFramework(framework.name, i);
                props.getQuestions(i);
              }}
            />
          </div>
        </div>
        <div className="form-control">{framework.name}</div>
      </div>
    );
  });
};

const Question = props => {
  return props.questionsData.map((node, i) => {
    return node.questions.map((q, i) => {
      return <div key={i}>{q.question}</div>;
    });
  });
};

const FrameworkSelection = props => {
  return (
    <div>
      {Framework(props)} {Question(props)}
    </div>
  );
};

const mapStateToProps = state => ({
  frameworkSelected: state.frameworkSelected,
  frameworkIDsArr: state.frameworkIDsArr,
  questionsData: state.questionsData
});

const mapDispatchToProps = dispatch => ({
  selectFramework: (frameworkName, i) =>
    dispatch(selectFramework(frameworkName, i)),
  getQuestions: frameworkID => dispatch(getQuestions(frameworkID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FrameworkSelection);
