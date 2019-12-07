const data = require("../../surveydata.json");

const reducer = (
  state = {
    data: data,
    questions: [],
    qIndex: 0,
    answers: [],
    counter: 0,
    otherVis: false,
    comment: ""
  },
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
      var obj = {
        question: action.question,
        answer: action.answer
      };
      console.log(obj);
      return {
        ...state,
        answers: state.answers.concat(obj),
        counter: state.counter + 1
      };
    }

    case "CHANGE_OTHER_VIS": {
      return {
        ...state,
        otherVis: action.value
      };
    }

    case "UPDATE_COMMENT_TEXT": {
      return {
        ...state,
        comment: action.text
      };
    }
    default:
      return state;
  }
};

export default reducer;
