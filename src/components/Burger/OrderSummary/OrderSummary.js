import React from 'react'
import PropTypes from 'prop-types'
import Aux from "../../../hoc/Aux";


const orderSummary = ({ingredients}) => {
    const ingredientSummary = Object.keys(ingredients).map(ingKey => <li key={ingKey}><span>{ingKey}</span>: {ingredients[ingKey]}</li>);

    return (<Aux>
        <h3>Your Order: </h3>
        <p>A delicious burger with the following ingredients: </p>
        <ul>
            {ingredientSummary}
        </ul>
    </Aux>);
};

orderSummary.PropTypes = {
    ingredients: PropTypes.object.isRequired
};

export default orderSummary;