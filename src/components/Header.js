import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        // has to have a parent container eg div header etc
        <header>
            <h1 style={headingStyle}>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
}

export default Header
