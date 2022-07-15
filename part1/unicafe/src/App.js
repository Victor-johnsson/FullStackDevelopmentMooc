import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const valueArray = [good, neutral, bad];

  const setGoodValue = (newValue) => {
    newValue = good + 1;
    setGood(newValue);
  };

  const setNeutralValue = (newValue) => {
    newValue = neutral + 1;
    setNeutral(newValue);
  };
  const setBadValue = (newValue) => {
    newValue = bad + 1;
    setBad(newValue);
  };

  return (
    <div>
      <Header />
      <Button name="Good" handleClick={setGoodValue} />
      <Button name="Neutral" handleClick={setNeutralValue} />
      <Button name="Bad" handleClick={setBadValue} />
      <Statistics values={valueArray} />
    </div>
  );
};

const Header = () => {
  return <h1>give feedback</h1>;
};

const Button = (props) => (
  <button onClick={props.handleClick}>{props.name}</button>
);

const Statistics = (props) => {
  const array = props.values;
  const good = array[0];
  const bad = array[2];
  const neutral = array[1];
  const all = good + bad + neutral;

  const average = (good - bad) / all;

  const positive = (good / all) * 100;

  if (all > 0) {
    return (
      <>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine name="Good" value={good} />
            <StatisticLine name="Neutral" value={neutral} />
            <StatisticLine name="Bad" value={bad} />
            <StatisticLine name="All" value={all} />
            <StatisticLine name="Average" value={average} />
            <StatisticLine name="positive" value={positive} />
          </tbody>
        </table>
      </>
    );
  } else {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }
};

const StatisticLine = ({ name, value }) => {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{value}</td>
      </tr>
    </>
  );
};

export default App;
