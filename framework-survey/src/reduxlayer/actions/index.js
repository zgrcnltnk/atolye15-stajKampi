export const selectFramework = (frameworkName, i) => ({
  type: "SELECT_FRAMEWORK",
  frameworkName: frameworkName,
  frameworkID: i
});

export const getQuestions = frameworkID => ({
  type: "GET_QUESTIONS",
  selected: frameworkID
});
