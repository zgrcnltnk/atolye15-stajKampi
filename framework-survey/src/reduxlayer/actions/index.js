export const selectFramework = (frameworkName, i) => ({
  type: "SELECT_FRAMEWORK",
  frameworkName: frameworkName,
  frameworkID: i
});

export const getQuestions = frameworkID => ({
  type: "GET_QUESTIONS",
  selected: frameworkID
});

export const showNextQuestion = questionID => ({
  type: "SHOW_NEXT_QUESTION"
});
