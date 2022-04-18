import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
export function Home() {
  return (
    <div className="grid-layout">
      <main className="home-main">
        <div className="home-main-child">
          <h1 className="ft-w-900">Quiz</h1>
          <p className="ft-w-500 ft-grey">Lets play quiz!</p>
          <a href="#quiz" className="btn btn-primary btn-ls">
            Explore
          </a>
        </div>
        <div className="home-main-child">
          <img
            src="https://raw.githubusercontent.com/mikesch803/fit-quiz/d4b0d07666c735b7d8304c2c519158c8b38e7efc/assests/images/Questions-cuate.svg"
            alt="boy-illustration"
            className="img-resp"
          />
        </div>
      </main>
      <section className="home-section">
        <h1 className="ft-w-700 txt-center" id="quiz">
          Categories
        </h1>
        <ul className="categories-list">
          {Array(3)
            .fill()
            .map((_) => (
              <li>
                <div className="card card-vrt">
                  <div className="card-img-container">
                    <img
                      className="card-img"
                      src="https://www.denofgeek.com/wp-content/uploads/2018/06/lucifer-season-4-key-art-netflix.jpg?fit=820%2C430"
                      alt="lucifer"
                    />
                  </div>
                  <div className="card-desc">
                    <p className="ft-w-500 ft-grey">Thriller</p>
                    <Link to='/quiz' className="btn btn-link">
                      take quiz
                    </Link>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}
