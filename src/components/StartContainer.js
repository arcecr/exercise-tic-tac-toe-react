import PropTypes from 'prop-types'

const StartContainer = ({ children }) => {
    return (
        <div className="startContainer">
            {children}
        </div>
    )
}

StartContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ])
}

export default StartContainer
