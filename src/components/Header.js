import PropTypes from 'prop-types';
import Button from './Button'


// this file is for the header of our project, in react each segment 'component' is broken into different files to be used
// later on

// Header arrow function with a title parameter which is access through title='task tracker' in App.js file
const Header = ({ title, onAdd, showAdd }) => {
    // const onClick =() =>{
    //     console.log('click');
    // }
    return (
        // has to have a parent container eg div header etc
        // can an empty tag <> </> called a fragment, but when rendered it wont have a container which is not normally favoured
        <header className='header'>
            <h1> {title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'close' : 'Add'} onClick={onAdd} />
        </header>
    )
}

// defaultProps are used to make your code robust by giving defaults
Header.defaultProps = {
    title: 'Task Tracker'
}

// propTypes tend to specifiy what info can be added
// For this instance we make it so that the title has to have a string which is required to comply

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// One way for styling but not preferred
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

// To use this, you would have to use this <h1 style={headingStyle}>{title}</h1>

// exports the header to be used within the app.js file
export default Header
