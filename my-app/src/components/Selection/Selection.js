import React from 'react';
import Bag from '../Bag/Bag';

const Selection = (props) => {
    const jeans = {
        color: "blue",
        price: "49.99"
    }

    return (
        <div>
            <h1>Hello World</h1>
            <Bag message={jeans.color} />
        </div>
    )   
};

export default Selection;