import React, { Component } from "react";

export default class QuizComponent extends Component {
  render() {
    return (
      <div className="question-palette">
        <h1>Question</h1>
        <h2>
          <span>1</span> of <span>15</span>
        </h2>
        <div className="Question-box">
          <h3>Question here</h3>
          <div className="Option-holder">
            <button>Option A</button>
            <button>Option B</button>
            <button>Option C</button>
            <button>Option D</button>
          </div>
        </div>
        <div className="navigation-buttons">
          <button>Previous</button>
          <button>Next</button>
          <button>Quit</button>
        </div>
      </div>
    );
  }
}
