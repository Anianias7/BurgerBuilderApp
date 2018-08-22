import React from 'react'
import propTypes from 'prop-types'

import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";


const orderSummary = ({ingredients, purchaseCanceled, purchaseContinued, price}) => {
    const ingredientSummary = Object.keys(ingredients).map(ingKey => <li key={ingKey}>
        <span>{ingKey}</span>: {ingredients[ingKey]}</li>);

    return (<Aux>
        <h3>Your Order: </h3>
        <p>A delicious burger with the following ingredients: </p>
        <ul>
            {ingredientSummary}
        </ul>
        <p><strong>Total Price: {price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={purchaseCanceled}>CANCEL</Button>
        <Button btnType="Success" clicked={purchaseContinued}>CONTINUE</Button>
    </Aux>);
};

orderSummary.propTypes = {
    ingredients: propTypes.object.isRequired
};

export default orderSummary;