import React, { Component } from "react";

export default class ResultComponent extends Component {
  render() {
    return (
      <div className="Resultholder">
        <h1>Result</h1>
        <div className="resultBoard">
          <h3>Text based on performance</h3>
          <h2>Your score is 20% </h2>
          <div>
            <span>Total number of questions</span>
            <span>15</span>
          </div>
          <div>
            <span>Number of attempted questions</span>
            <span>12</span>
          </div>
          <div>
            <span>Number of correct questions</span>
            <span>10</span>
          </div>
          <div>
            <span>Number of wrong questions</span>
            <span>2</span>
          </div>
        </div>
        <div className="buttons">
          <button>Play Again</button>
          <button>Back to home</button>
        </div>
      </div>
    );
  }
}
