import PropTypes from 'prop-types'
import ClassNames from 'classnames'

const Player = ({ name, symbol, isTurn }) => {
    const classes = ClassNames("player", {
        [`${symbol}_bg`]: isTurn,
	});

    return (
        <div className={classes}>
            (<strong>{symbol.toUpperCase()}</strong>) {name}
        </div>
    )
}

Player.propTypes = {
    name: PropTypes.string,
    symbol: PropTypes.string,
    isTurn: PropTypes.bool
}

export default Player
