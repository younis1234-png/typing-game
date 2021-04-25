import React, { useState, useEffect } from "react";
import "./App.css";
import Words from "./Words";
import Container from "./components/Container";
import TypeRacer from "./components/TyperRacer";
import Results from "./components/Results";

const App = () => {
  const [word, setWord] = useState(Words);
  const [newWord, setNewWord] = useState(word[0]);
  const [disabled, setDisabled] = useState(true);
  const [correctResults, setCorrectResult] = useState([]);
  const [wrongResults, setWrongResults] = useState([]);
  const [countCorrect, setCountCorrect] = useState(0);
  const [time, setTime] = useState(30);
  const [inputValue, setInputValue] = useState("");
  const [animation, setAnimation] = useState(null);

  // get random words
  const randomwords = Math.floor(Math.random() * word.length);

  const checkAnswer = () => {
    if (inputValue.trim() === newWord) {
      setCorrectResult((prevCorrect) => [...prevCorrect, newWord]);
      setCountCorrect((prevCorrect) => prevCorrect + 1);
      return;
    }
    setWrongResults((prevWrong) => [...prevWrong, inputValue]);
  };

  const handleInput = (e) => {
    if (e.charCode === 13 && inputValue.trim() !== "") {
      checkAnswer();
      setNewWord(word[randomwords]);
      setInputValue("");
      return;
    }
  };

  const handleStart = () => {
    // toggle disable button
    setDisabled(!disabled);

    setCorrectResult([]);
    setWrongResults([]);
    setCountCorrect(0);
    setInputValue("");
  };

  useEffect(() => {
    if (time <= 30 && time !== 0 && disabled === false) {
      setTimeout(() => setTime((prevTime) => prevTime - 1), 1000);
    } else if (disabled) {
      setTime(30);
      setAnimation(null);
    } else if (time === 0) {
      setDisabled(true);
    }

    // when time is less than 10
    if (time <= 10) {
      setAnimation("scaleNumber 2s infinite");
    }
  }, [disabled, time]);

  // get a randomw word each time we reload the page
  useEffect(() => {
    setNewWord(word[randomwords]);
  }, []);

  return (
    <div className="App">
      <Container>
        <TypeRacer
          newWord={newWord}
          inputValue={inputValue}
          setInputValue={setInputValue}
          disabled={disabled}
          time={time}
          animation={animation}
          handleInput={handleInput}
          handleStart={handleStart}
        />
      </Container>
      <Results
        correctResults={correctResults}
        wrongResults={wrongResults}
        countCorrect={countCorrect}
      />
    </div>
  );
};

export default App;
