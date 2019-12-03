const data = require("../../surveydata.json");

const reducer = (
  state = { data: data, questions: [], qIndex: 0, answers: [] },
  action
) => {
  switch (action.type) {
    case "ADD_TO_QUESTIONS": {
      let qs;
      state.data.find(obj => {
        if (obj.name === action.frameworkName) qs = obj.questions;
      });
      console.log(qs);

      return {
        ...state,
        questions: state.questions.concat(qs),
        frameworkName: action.frameworkName,
        qIndex: state.qIndex + qs.length
      };
    }
    case "ADD_TO_ANSWERS": {
      var obj = { question: action.question, answer: action.answer };
      console.log(obj);
      return {
        ...state,
        answers: state.answers.concat(obj)
      };
    }
    default:
      return state;
  }
};

export default reducer;
