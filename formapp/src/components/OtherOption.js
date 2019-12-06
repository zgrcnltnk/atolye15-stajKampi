import React, { useState } from "react";

const OtherOption = props => {
  const [submitButtonVis, setSubmitButtonVis] = useState(true);

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

export default OtherOption;
