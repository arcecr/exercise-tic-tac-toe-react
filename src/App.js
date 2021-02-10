import { useState, useRef } from 'react'

import './App.css'

import Title from './components/Title'
import Game from './components/Game'
import Icon from './components/Icon'
import InputWrapper from './components/InputWrapper'
import StartContainer from './components/StartContainer'
import TitleInfo from './components/TitleInfo'

const App = () => {

    const [players, setPlayers] = useState([
        {
            type: null,
            name: null,
            symbol: null
        },
        {
            type: null,
            name: null,
            symbol: null
        }
    ])

    const playerInputRef = useRef();
    const oponentInputRef = useRef();

    const [isPlaying, setIsPlaying] = useState(false);

    function handleStartGame() {
        if (playerInputRef.current.value && oponentInputRef.current.value) {
            setPlayers([{
                type: "player",
                name: playerInputRef.current.value,
                symbol: "x"
            },
            {
                type: "oponent",
                name: oponentInputRef.current.value,
                symbol: "o"
            }])

            setIsPlaying(true)
        }
    }

    return (
        <>
            <Title>
                <h1>Tic Tac Toe with React</h1>
            </Title>
            
            { !isPlaying &&
                <>
                    <TitleInfo>
                        <h2>Choose your weapon</h2>
                    </TitleInfo>
                    <StartContainer>

                        <InputWrapper>
                            <input type="text" name="playerX" ref={playerInputRef} placeholder="Player 1" />
                            <label htmlFor="playerX" className="inputIcon">
                                <Icon fas name="times" size="x2" className="x_color" />
                            </label>
                        </InputWrapper>

                        <InputWrapper>
                            <input type="text" name="playerO" ref={oponentInputRef} placeholder="Player 2" />
                            <label htmlFor="playerO" className="inputIcon">
                                <Icon far name="circle" size="x2" className="o_color" />
                            </label>
                        </InputWrapper>

                        <button onClick={ handleStartGame }>Start</button>
                    </StartContainer>
                </>
        
            }

            { isPlaying && <Game players={players} /> }
        </>
    );
}

export default App;
