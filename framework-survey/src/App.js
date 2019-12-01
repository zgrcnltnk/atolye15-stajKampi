import React, { useState, useEffect } from "react";
// import * as SurveyData from "./components/SurveyParticle/SurveyDataGetter";
import FrameworkSelection from "./components/FrameworkSelection";
import "./App.css";

function App() {
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

export default App;
