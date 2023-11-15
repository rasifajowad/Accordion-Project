import React from "react";
import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions, activeID, toggleFunc }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeID={activeID}
            toggleFunc={toggleFunc}
          />
        );
      })}
    </section>
  );
};

export default Questions;
