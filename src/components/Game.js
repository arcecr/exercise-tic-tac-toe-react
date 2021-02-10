import { useState } from 'react'
import PropTypes from 'prop-types'

import { calculateWinner } from '../util'

import Board from './Board'
import Icon from './Icon';
import Player from './Player';
import TitleInfo from './TitleInfo';

const Game = ({ players }) => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setxIsNext] = useState(true);
    
    const playerX = players[0];
    const playerO = players[1];

    const winner = calculateWinner(history[stepNumber]);
    
    function handleClick(i) {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];

        if (winner || squares[i]) return;

        squares[i] = xIsNext ? 'x' : 'o'

        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setxIsNext(!xIsNext);
    }

    return (
        <>
            <TitleInfo>
                <h2>
                    { history.length === history[stepNumber].length + 1 && !winner 
                    ? "Tie game!" 
                    : winner 
                        ? `Winner: ${playerX.symbol === winner ? playerX.name : playerO.name } (${ winner.toUpperCase() })` 
                        : `It is ${xIsNext ? playerX.name : playerO.name} turn`
                    }
                </h2>
            </TitleInfo>

            <Board squares={history[stepNumber]} onClick={handleClick} />

            <div className="actions">
                <Player name={playerX.name } symbol={playerX.symbol} isTurn={xIsNext} />
                <Icon fas name="redo-alt" size="2x" className="restartIcon" onClick={() => { setStepNumber(0); setxIsNext(true) }} />
                <Player name={playerO.name } symbol={playerO.symbol} isTurn={!xIsNext} />
            </div>
        </>
    )
}

Game.propTypes = {
    players: PropTypes.array
}

export default Game
