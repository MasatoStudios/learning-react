import PropTypes from 'prop-types';

// Using props but destructured them by naming the specifics such as color and text
const Button = ({color, text}) => {

    // Basic function for on click event
    // const onClick = (e) => {
    //     console.log(e)
    // }
    // onClick={onClick} to call the function

    return( 
        // to use the color, we use an inline style and add the argument as the prop 'color'
    <button style={{backgroundColor: color}} className='btn'>{text}</button>
    )
}

// adding a default color so if no color is specified then this will be assigned automatically
Button.defaultProps = {
    color: 'steelblue'
}

// propTypes to make sure the arguments passed in the other file are correct, making it more robust
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

// exports the Button 
export default Button
