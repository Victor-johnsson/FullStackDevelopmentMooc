import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [largest, setLargest] = useState(0);
  const [vote, setVote] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  });
  const getRandomInt = (max) => Math.floor(Math.random() * max);

  const selectRandomQuote = () => {
    const randomInt = getRandomInt(anecdotes.length);
    setSelected(randomInt);
  };

  const addVote = () => {
    const copy = { ...vote };
    copy[selected] += 1;
    setVote(copy);
    console.log(copy);
    findLargest(copy);
  };

  const findLargest = (votes) => {
    let arr = Object.values(votes);
    console.log(arr);
    let max = Math.max(...arr);
    console.log(max);
    for (let i = 0; i < arr.length; i++) {
      if (max === arr[i]) {
        console.log(i);
        setLargest(i);
        break;
      }
    }
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} />
      <p>has {vote[selected]} votes</p>
      <Button name="next anecdote" handleClick={selectRandomQuote}></Button>
      <Button name="vote" handleClick={addVote} />
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={anecdotes[largest]} />
      <p>has {vote[largest]} votes</p>
    </div>
  );
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.name}</button>;
};

const Anecdote = (props) => {
  return <p>{props.anecdote}</p>;
};
export default App;
