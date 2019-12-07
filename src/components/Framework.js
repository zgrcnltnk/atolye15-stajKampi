import React from "react";
import { connect } from "react-redux";
import { addToQuestions, showOtherOpt } from "../reduxlayer/actions";

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
                else if (framework.name === "Diğer") props.showOtherOpt(true);
              }}
            />
          </div>
        </div>
        <div className="form-control">{framework.name}</div>
      </div>
    );
  });
};

const mapStateToProps = state => ({
  json: state.data,
  otherVis: state.otherVis
});

const mapDispatchToProps = dispatch => ({
  addToQuestions: frameworkName => dispatch(addToQuestions(frameworkName)),
  showOtherOpt: value => dispatch(showOtherOpt(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Framework);
