import PropTypes from 'prop-types'

import Title from './Title'

const TitleInfo = ({ children }) => {
    return (
        <Title className="info">
            { children }
        </Title>
    )
}

TitleInfo.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ])
}

export default TitleInfo
