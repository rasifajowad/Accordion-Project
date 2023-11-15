import { useState } from "react";
import questions from "./data";
import Questions from "./Questions";

const App = () => {
  const [activeID, setActiveId] = useState(null);
  const toggleFunc = (id) => {
    const newActiveId = id === activeID ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <main>
      <Questions
        questions={questions}
        activeID={activeID}
        toggleFunc={toggleFunc}
      />
    </main>
  );
};
export default App;
