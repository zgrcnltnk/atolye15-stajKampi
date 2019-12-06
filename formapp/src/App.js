import React from "react";
import { connect } from "react-redux";
import { addToQuestions, addToAnswers } from "./reduxlayer/actions";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SubmissionScreen from "./components/SubmissionScreen";
// import Framework from "./components/Framework";
// import Quest from "./components/Quest";
// import OtherOption from "./components/OtherOption";
import Form from "./components/Form";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Form} />
        <Route path="/submission" component={SubmissionScreen} />
      </Router>
    </div>
  );
}

const mapStateToProps = state => ({
  json: state.data,
  qIndex: state.qIndex,
  questions: state.questions,
  counter: state.counter,
  otherVis: state.otherVis
});

const mapDispatchToProps = dispatch => ({
  addToQuestions: frameworkName => dispatch(addToQuestions(frameworkName)),
  addToAnswers: (q, a) => dispatch(addToAnswers(q, a))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// const Framework = props => {
//   return props.json.map((framework, i) => {
//     return (
//       <div key={i} className="input-group mb-3">
//         <div className="input-group-prepend">
//           <div className="input-group-text ">
//             <input
//               type="checkbox"
//               onChange={() => {
//                 if (framework.name !== "Diğer")
//                   props.addToQuestions(framework.name);
//                 else if (framework.name === "Diğer") showOther(true);
//               }}
//             />
//           </div>
//         </div>
//         <div className="form-control">{framework.name}</div>
//       </div>
//     );
//   });
// };

// const Quest = props => {
//   return props.qIndex ? (
//     <ul className="list-group">
//       {props.questions[counter].question}
//       {props.questions[counter].anwers.map((a, i) => (
//         <li key={i} className="list-group-item">
//           <button
//             className="btn btn-info"
//             key={i}
//             onClick={() => {
//               setCounter(counter + 1);
//               props.addToAnswers(props.questions[counter].question, a);
//             }}
//           >
//             {a}
//           </button>
//         </li>
//       ))}
//     </ul>
//   ) : (
//     <ul>Framework seçimi yap..</ul>
//   );
// };

// const OtherOption = props => {
//   return (
//     <div className="input-group mb-3">
//       <div className="input-group-prepend">
//         <button
//           className="btn btn-outline-success"
//           type="button"
//           disabled={submitButtonVis}
//           onClick={() => {}}
//         >
//           Gönder
//         </button>
//       </div>
//       <input
//         type="text"
//         className="form-control"
//         placeholder="Yorum yaz.."
//         onChange={e => {
//           if (e.target.value !== "") setSubmitButtonVis(false);
//           else setSubmitButtonVis(true);
//         }}
//       />
//     </div>
//   );
// };
