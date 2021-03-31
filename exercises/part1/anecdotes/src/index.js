import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = ({ title }) => <h1>{title}</h1>;
const Anecdote = ({ anecdote, vote }) => (
    <>
        <p>{anecdote}</p>
        <p>has {vote} points</p>
    </>
);
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = (props) => {
    const { anecdotes } = props;
    const [selected, setSelected] = useState(0);
    const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));
    const headers = ["Anecdote of the day", "Anecdote with the most votes"];
    const voting = () => {
        const arr = [...vote];
        arr[selected] = arr[selected] + 1;
        setVote(arr);
    };
    return (
        <>
            <Header title={headers[0]} />
            <Anecdote anecdote={anecdotes[selected]} vote={vote[selected]} />
            <Button onClick={voting} text="vote" />
            <Button
                onClick={() => {
                    setSelected(Math.floor(Math.random() * anecdotes.length));
                }}
                text="next anecdote"
            />
            <Header title={headers[1]} />
            <Anecdote
                anecdote={anecdotes[vote.indexOf(Math.max(...vote))]}
                vote={Math.max(...vote)}
            />
        </>
    );
};

const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(
    <React.StrictMode>
        <App anecdotes={anecdotes} />
    </React.StrictMode>,
    document.getElementById("root")
);
