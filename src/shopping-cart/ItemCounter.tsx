// 1er react
import { useState } from 'react'
// 2do import terceros
// 3er owner imports
// 4to css
import './ItemCounter.css'



interface Props {
    name: string;
    quantity?: number;
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
    const [count, setCount] = useState(quantity);

    const handleAdd = () => {
        console.log('onClick by testing');

        setCount(count + 1)
    }

    const handleSubtract = () => {
        if (count === 1) return;
        setCount(count - 1);
    }

    // const handleClick = () => {
    //     console.log(`Mouse enter ${name}`);
    // }

    // JSX ==! HTML
    return (
        <section
            className="item-row"
        // style={{
        //     display: 'flex',
        //     alignItems: 'center',
        //     gap: 10,
        //     marginTop: 10
        // }}
        >

            <span
                className='item-width'
                style={{
                    color: count === 1 ? 'red' : 'black',
                }}
            >
                {name}
            </span>
            <button
                onClick={handleAdd}
            >+1</button>
            <span>{count}</span>
            <button
                onClick={handleSubtract}
            >
                -1
            </button>

        </ section>
    )
}









