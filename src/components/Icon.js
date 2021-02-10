import PropTypes from 'prop-types'
import ClassNames from 'classnames'

const Icon = ({ name, size, fas, far, className, onClick }) => {
    const classes = ClassNames(className, {
        [`fas`]: fas,
        [`far`]: far,
        [`fa-${name}`]: name,
        [`fa-${size}`]: size,
	});

    return (
        <i className={classes} onClick={onClick} />
    )
}

Icon.propTypes = {
    name: PropTypes.string,
    size: PropTypes.string,
    fas: PropTypes.bool,
    far: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func
}

export default Icon
