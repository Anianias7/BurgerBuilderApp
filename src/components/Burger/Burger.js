import React from 'react';

import classes from './Burger.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngriedient";

const burger = ({
                    ingredients
                }) => {
    let transformedIngredients = Object.keys(ingredients).map(igKey => {
        return [...Array(ingredients[igKey])].map((_, index) => {
            return <BurgerIngredient key={igKey + index} type={igKey}/>
        });
    }).reduce((ingList, ing) => ingList.concat(ing), []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients! ;)</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={'bread-top'}/>
            {transformedIngredients}
            <BurgerIngredient type={'bread-bottom'}/>
        </div>
    );
};

export default burger;
