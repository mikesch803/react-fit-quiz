import React, { useState } from "react";
import { Link } from "react-router-dom";
import { quiz } from "../../data/quiz-data";
import "./Quiz.css";
export function Quiz() {
  const [index, setIndex] = useState(0);
  return (
    <div className="quiz-grid-layout">
      <main className="main-quiz">
        <div className="quiz">
          <div className="quiz-sub-heading">
            <h4 className="ft-w-500 ft-grey">Question: {index + 1}/5 </h4>
          </div>

          <h2 className="ft-w-700">{quiz[index].question}</h2>
          <label className="quiz-option btn-primary txt-center">
            <input type="radio" className="options" name="que-1" />
            {quiz[index].option1.option}
          </label>

          <label className="quiz-option  btn-primary txt-center">
            <input type="radio" className="options" name="que-1" />
            {quiz[index].option2.option}
          </label>

          <label className="quiz-option  btn-primary txt-center">
            <input type="radio" className="options" name="que-1" />
            {quiz[index].option3.option}
          </label>
        </div>
        {index === quiz.length - 1 ? (
          <Link to="/result">
            <button className="btn btn-primary btn-submit">submit</button>
          </Link>
        ) : (
          <button
            className="btn btn-primary btn-submit"
            onClick={() => setIndex(index + 1)}
          >
            next
          </button>
        )}
      </main>
    </div>
  );
}
