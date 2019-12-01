const data = require("../../components/SurveyParticle/surveydata.json");

const reducer = (
  state = { surveyData: data, frameworkSelected: false },
  action
) => {
  switch (action.type) {
    case "SELECT_FRAMEWORK":
      return { ...state, frameworkSelected: true };

    default:
      return state;
  }
};

export default reducer;
