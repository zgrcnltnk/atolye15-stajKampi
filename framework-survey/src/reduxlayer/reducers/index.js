import fill from "lodash.fill";
const data = require("../../components/SurveyParticle/surveydata.json");

const reducer = (
  state = {
    questionsData: [],
    frameworkIDsArr: [],
    surveyData: data,
    frameworkSelected: false,
    questionsVisArr: [],
    questionCount: 0,
    q: []
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

    case "GET_QUESTIONS": {
      return {
        ...state,
        questionArr: state.questionsData.push(data[action.selected]),
        questionCount:
          state.questionCount + data[action.selected].questions.length,
        q: state.questionsData.push(data[action.selected])
      };
    }
    case "SHOW_NEXT_QUESTION":
      return {
        ...state
      };

    default:
      return state;
  }
};

export default reducer;
