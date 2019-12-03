import React, { useEffect, useState } from "react";
import * as SurveyData from "../SurveyParticle/SurveyDataGetter";
import { connect } from "react-redux";
import {
  selectFramework,
  getQuestions,
  showNextQuestion
} from "../../reduxlayer/actions";
//framework questions answers
const FrameworkSelection = props => {
  const Framework = props => {
    return SurveyData.data.map((framework, i) => {
      return (
        <div key={i} className="input-group mb-3">
          <div className="input-group-prepend">
            <div className="input-group-text ">
              <input
                type="checkbox"
                onChange={() => {
                  props.selectFramework(framework.name, i);
                  props.getQuestions(i);
                  setQuestions(props.questionsData);
                }}
              />
            </div>
          </div>
          <div className="form-control">{framework.name}</div>
        </div>
      );
    });
  };

  const Answer = props => {
    return props.questionsData ? (
      props.questionsData.map((node, i) => {
        return node.questions.map((q, j) => {
          return q.anwers.map((a, k) => {
            return <div key={k}>{a}</div>;
          });
        });
      })
    ) : (
      <div>answer</div>
    );
  };

  const Question = props => {
    return props.questionsData ? (
      props.questionsData.map((node, i) => {
        return node.questions.map((q, j) => {
          return (
            <div key={j}>
              {q.question}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        });
      })
    ) : (
      <div>question</div>
    );
  };

  const QuestionAndAnswer = props => {
    return props.questionsData ? (
      props.questionsData.map((node, i) => {
        return node.questions.map((q, j) => {
          return (
            <div key={j} className="input-group">
              <div className="input-group-prepend">
                {q.question}
                <div className="btn-group" role="group">
                  {q.anwers.map((answer, k) => {
                    return (
                      <input
                        type="button"
                        key={k}
                        type="button"
                        className="btn btn-secondary"
                        value={answer}
                        onClick={() => {
                          if (q.anwers.length >= k - 1)
                            props.showNextQuestion(k + 1);
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        });
      })
    ) : (
      <div></div>
    );
  };

  const Quest = props => {
    return (
      <div>
        soru
        <div>cevap1</div>
      </div>
    );
  };

  // <div key={j} className="input-group">
  //   <div className="input-group-prepend">
  //     <div className="input-group-text ">
  //       {q.question}
  //       {q.anwers.map((answer, k) => (
  //         <div className="form-control" key={k}>
  //           <input type="radio" />
  //           {answer}
  //         </div> // TODO: radio button ekle onSelect kismina dispatch ekle
  //       ))}
  //     </div>
  //   </div>
  // </div>

  // <div key={j}>
  //   {q.question}
  // {q.anwers.map((answer, k) => (
  //   <div key={k}>{answer}</div> // TODO: radio button ekle onSelect kismina dispatch ekle
  // ))}
  // </div>

  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    // console.log(props.questionsData);
  }, [props]);
  return <div>{Framework(props)}</div>;
};
// {Question(props)} {Answer(props)}

const mapStateToProps = state => ({
  frameworkSelected: state.frameworkSelected,
  frameworkIDsArr: state.frameworkIDsArr,
  questionsData: state.questionsData
});

const mapDispatchToProps = dispatch => ({
  selectFramework: (frameworkName, i) =>
    dispatch(selectFramework(frameworkName, i)),
  getQuestions: frameworkID => dispatch(getQuestions(frameworkID)),
  showNextQuestion: questionID => dispatch(showNextQuestion(questionID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FrameworkSelection);
