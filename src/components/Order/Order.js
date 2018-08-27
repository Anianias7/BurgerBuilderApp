import React from 'react'
import classes from './Order.css'

const Order = ({
                   ingredients,
                   price,
                   id
               }) => {

    const listOfIngredients = Object.keys(ingredients).map(ingredient => <li
        key={id + ingredient}>{ingredient} : {ingredients[ingredient]}</li>);

    return (
        <div className={classes.Order}>
            <p>Ingredients: </p>
            <ul>
                {listOfIngredients}
            </ul>
            <p>Price: <strong>{price}</strong></p>
        </div>)
};

export default Order;