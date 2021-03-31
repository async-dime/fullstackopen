import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, text }) => {
    return <button onClick={handleClick}>{text}</button>;
};

const Statistic = ({ text, value, ratio }) => (
    <table>
        <tbody >
            <tr >
                <td> {text} </td>
                <td>
                    {value} {ratio}
                </td>
            </tr>
        </tbody>
    </table>
);

const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad;
    const average = (good - bad) / (good + bad + neutral);
    const positive = (good / (good + bad + neutral)) * 100;
    return all === 0 ? (
        <p>No feedback given</p>
    ) : (
        <>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={all} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={positive} ratio="%" />
        </>
    );
};

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    return (
        <>
            <h1>give feedback</h1>
            <div style={{ display: "flex" }}>
                <Button handleClick={() => setGood(good + 1)} text="good" />
                <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
                <Button handleClick={() => setBad(bad + 1)} text="bad" />
            </div>
            <h1>statistics</h1>
            <Statistics good={good} bad={bad} neutral={neutral} />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
