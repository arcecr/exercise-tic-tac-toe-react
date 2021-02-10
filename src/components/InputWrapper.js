import PropTypes from 'prop-types';

const InputWrapper = ({ children }) => {
    return (
        <div className="inputWrapper">
            { children }
        </div>
    )
}

InputWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ])
}

export default InputWrapper
