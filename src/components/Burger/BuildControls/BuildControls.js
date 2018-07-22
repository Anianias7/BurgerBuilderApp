import React from 'react'
import BuildControl from './BuildControl/BuildControl'

import classes from './BuildControls.css'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: {(props.price).toFixed(2)}</p>
            {controls.map(control => (
                <BuildControl
                    key={control.label}
                    label={control.label}
                    added={() => props.ingredientAdded(control.type)}
                    removed={() => props.ingredientRemoved(control.type)}
                    disable={props.disable[control.type]}
                />
            ))}
            <button className={classes.OrderButton}
                    disabled={!props.purchasable}
                    onClick={props.ordered}>ORDER NOW</button>
        </div>
    );
};

export default buildControls;