import './App.css';
import TicTacToe from "./tic_tac_toe/TicTacToe";
import {useState} from "react";
import MemoryGame from "./tic_tac_toe/MemoryGame";

function App() {
    const [openGame, setOpenGame] = useState('')

    return (
        <div className="App">
            <h1>My  Games</h1>
            <button onClick={() => setOpenGame('TicTacToe')}>tic_tac_toe</button>
            <button onClick={() => setOpenGame('MemoryGame')}>memory game</button>
            {openGame === 'TicTacToe'  && <TicTacToe/>}
            {openGame === 'MemoryGame' && <MemoryGame /> }

        </div>
    );
}

export default App;
