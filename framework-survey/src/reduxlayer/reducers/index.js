const data = require("../../components/SurveyParticle/surveydata.json");

const reducer = (
  state = {
    questionsData: [],
    frameworkIDsArr: [],
    surveyData: data,
    frameworkSelected: false
  },
  action
) => {
  switch (action.type) {
    case "SELECT_FRAMEWORK":
      return {
        ...state,
        frameworkSelected: true,
        myIDs: state.frameworkIDsArr.push(action.frameworkID)
      };

    case "GET_QUESTIONS":
      return {
        ...state,
        questionArr: state.questionsData.push(data[action.selected])
      };

    default:
      return state;
  }
};

export default reducer;
