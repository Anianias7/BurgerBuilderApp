import React from 'react'
import BuildControl from './BuildControl/BuildControl'

import classes from './BuildControls.css'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];


const buildControls = ({
                           price,
                           disable,
                           purchasable,
                           ordered,
                           ingredientAdded,
                           ingredientRemoved
                       }) => {
    return (
        <div className={classes.BuildControls}>
            {controls.map(control => (
                <BuildControl
                    key={control.label}
                    label={control.label}
                    added={() => ingredientAdded(control.type)}
                    removed={() => ingredientRemoved(control.type)}
                    disable={disable[control.type]}
                />
            ))}
            <button className={classes.OrderButton}
                    disabled={!purchasable}
                    onClick={ordered}>ORDER NOW
            </button>

        </div>
    );
};

export default buildControls;