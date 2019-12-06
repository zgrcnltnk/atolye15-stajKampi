export const addToQuestions = frameworkName => ({
  type: "ADD_TO_QUESTIONS",
  frameworkName: frameworkName
});

export const addToAnswers = (q, a) => ({
  type: "ADD_TO_ANSWERS",
  question: q,
  answer: a
});

export const showOtherOpt = value => ({
  type: "CHANGE_OTHER_VIS",
  value: value
});
