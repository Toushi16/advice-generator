import { useEffect, useState } from "react";
import Button from '../Button';
import './index.css';


const CardItem = () => {
    const [advices, setAdvices] = useState([]);
    const [count, setCount] = useState(1);

    useEffect(() => {
        fetch(`https://api.adviceslip.com/advice`, { cache: 'no-store' })
        .then((res) => res.json())
        .then((res) => setAdvices(res?.slip))
    },[count]);

    const onClick = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <div className='CardItem'>
            <p>{advices?.advice}</p>
            <Button onClick={onClick} textContent="New Advice"/>
        </div>
    )
};

export default CardItem;