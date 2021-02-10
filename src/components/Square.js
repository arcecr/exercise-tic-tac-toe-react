import PropTypes from 'prop-types'

const Square = ({ value, onClick }) => {
    return (
        <button className="square" onClick={onClick}>
            {value && <div className={value} />}
        </button>
    )
}

Square.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func
}

export default Square
