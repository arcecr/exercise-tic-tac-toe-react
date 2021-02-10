import PropTypes from 'prop-types';
import ClassNames from 'classnames';

const Title = ({ className, children }) => {
    const classes = ClassNames("title", className);
    
    return (
        <div className={classes}>
            { children }
        </div>
    )
}

Title.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ])
}

export default Title;
