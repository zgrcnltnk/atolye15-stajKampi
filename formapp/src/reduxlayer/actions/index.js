export const addToQuestions = frameworkName => ({
  type: "ADD_TO_QUESTIONS",
  frameworkName: frameworkName
});

export const addToAnswers = (q, a) => ({
  type: "ADD_TO_ANSWERS",
  question: q,
  answer: a
});
