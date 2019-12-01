import React, { useState, useEffect } from "react";
// import * as SurveyData from "./components/SurveyParticle/SurveyDataGetter";
import FrameworkSelection from "./components/FrameworkSelection";
import "./App.css";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <form>
        <div className="form-group">
          <label>Framework Seçimi</label>
          <FrameworkSelection />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  surveyData: state.surveyData
});

export default connect(
  mapStateToProps,
  null
)(App);
