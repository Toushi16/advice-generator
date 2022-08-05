import './index.css';

const Button = ({onClick, textContent}) => {
    return (
        <button className='Button' onClick={onClick}>{textContent}</button>
    )
}

export default Button;