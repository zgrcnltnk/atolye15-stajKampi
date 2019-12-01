import React from "react";
import * as SurveyData from "../SurveyParticle/SurveyDataGetter";
import { connect } from "react-redux";
import { selectFramework } from "../../reduxlayer/actions";

const Framework = props => {
  return SurveyData.data.map((framework, i) => {
    return (
      <div key={i} className="input-group mb-3">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
          </div>
        </div>
        <div className="form-control">{framework.name}</div>
      </div>
    );
  });
};

const FrameworkSelection = props => {
  return <div>{Framework(props)}</div>;
};

const mapDispatchToProps = dispatch => ({
  selectFramework: frameworkName => dispatch(selectFramework(frameworkName))
});

export default connect(
  null,
  mapDispatchToProps
)(FrameworkSelection);
