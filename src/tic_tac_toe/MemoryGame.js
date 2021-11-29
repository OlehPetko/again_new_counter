import '../App.css';
import {useState} from "react";


function MemoryGame() {
    const initialState = [
        {id: Math.random(), value: 1, buttons: [1]},
        {id: Math.random(), value: 2, buttons: [1, 2]},
        {id: Math.random(), value: 3, buttons: [1, 2, 3]}
    ]
    const [counters, setCounters] = useState(initialState)
    const [nextCounter, setNextCounter] = useState(4)
    const [nextButton, setNextButton] = useState(4)
    const plusAndMinus = (buttonId, value) => {
        const newCount = counters.map(el => el.id === buttonId ? {...el, value: el.value + value} : el)
        setCounters(newCount)
    }
    const addCounter = () => {
        const nextButtonCounter = []
        for (let i = 1; i <= nextButton; i++){
            nextButtonCounter.push(i)
            setNextButton(nextButton +1)
        }
        const newCounter = [...counters, {id: Math.random(), value: nextCounter, buttons: nextButtonCounter}]
        setCounters(newCounter)
        setNextCounter(nextCounter + 1)
    }

    return (
        <div className="App">
            <h3>Memory game</h3>
            {counters.map(counter =>
                <div key={counter.id}>
                    {counter.buttons.map(buttonValue =>
                        <button onClick={() => plusAndMinus(counter.id, buttonValue)}>{buttonValue}</button>)}
                    {counter.value}
                    {counter.buttons.map(buttonValue =>
                        <button onClick={() => plusAndMinus(counter.id, -buttonValue)}>{-buttonValue}</button>)}
                </div>
            )}
            <button onClick={addCounter}>add counter</button>
        </div>
    );
}

export default MemoryGame;
