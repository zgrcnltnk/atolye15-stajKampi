import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateCommentText } from "../reduxlayer/actions";

const OtherOption = props => {
  const [submitButtonVis, setSubmitButtonVis] = useState(true);
  let history = useHistory();

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <button
          className="btn btn-outline-success"
          type="button"
          disabled={submitButtonVis}
          onClick={() =>
            history.push({
              pathname: "/submission",
              state: {
                answers: props.answers,
                comment: props.comment
              }
            })
          }
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
          props.updateCommentText(e.target.value);
        }}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  answers: state.answers,
  comment: state.comment
});

const mapDispatchToProps = dispatch => ({
  updateCommentText: text => dispatch(updateCommentText(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OtherOption);
