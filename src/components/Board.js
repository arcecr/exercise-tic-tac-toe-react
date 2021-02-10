import PropTypes from 'prop-types';

import Square from './Square'

const Board = ({ squares, onClick }) => {
    return (
        <div className="board">
            {squares.map((square, i) => (
                <Square key={i} value={square} onClick={() => onClick(i)} />
            ))}
        </div>
    )
}

Board.propTypes = {
    squares: PropTypes.array,
    onClick: PropTypes.func
}

export default Board
