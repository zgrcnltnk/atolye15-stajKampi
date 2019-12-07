import React from "react";
import { connect } from "react-redux";
import Framework from "./Framework";
import Quest from "./Quest";
import OtherOption from "./OtherOption";

const Form = props => (
  <div>
    <Framework />
    {props.counter < props.qIndex && <Quest />}
    {((props.counter !== 0 && props.counter === props.qIndex) ||
      props.otherVis === true) && <OtherOption />}
  </div>
);

const mapStateToProps = state => ({
  counter: state.counter,
  otherVis: state.otherVis,
  qIndex: state.qIndex
});

export default connect(
  mapStateToProps,
  null
)(Form);
