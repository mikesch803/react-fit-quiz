import React from "react";
import "./Result.css";
import { quiz } from "../../data/quiz-data";

export function Result() {
  return (
    <div className="quiz-grid-layout">
      <main className="main-quiz">
        <ol className="quiz border-none">
          <h3>Result</h3>
          <h4 className="quiz-sub-heading ft-w-500 ft-grey">score: 2/5 </h4>
          {quiz.map((que) => (
            <>
              <li key={que._id}>
                <h2 className="ft-w-700">{que.question}</h2>
              </li>
              <label
                className={`quiz-option btn-primary txt-center ${
                  que.option1.answer ? "correct-ans" : "wrong-ans"
                }`}
              >
                <input type="radio" className="options" name="que-1" />
                {que.option1.option}
              </label>

              <label
                className={`quiz-option btn-primary txt-center ${
                  que.option2.answer ? "correct-ans" : "wrong-ans"
                }`}
              >
                <input type="radio" className="options" name="que-1" />
                {que.option2.option}
              </label>

              <label
                className={`quiz-option btn-primary txt-center ${
                  que.option3.answer ? "correct-ans" : "wrong-ans"
                }`}
              >
                <input type="radio" className="options" name="que-1" />
                {que.option3.option}
              </label>
            </>
          ))}
        </ol>
      </main>
    </div>
  );
}
