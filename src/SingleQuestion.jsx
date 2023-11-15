import React from "react";
import { useState } from "react";

const SingleQuestion = ({ id, title, info, activeID, toggleFunc }) => {
  const isActive = id === activeID;
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          type="button"
          className="question-btn"
          onClick={() => {
            toggleFunc(id);
          }}
        >
          {isActive ? `-` : `+`}
        </button>
      </header>
      <p>{isActive ? `${info}` : ""}</p>
    </article>
  );
};

export default SingleQuestion;
