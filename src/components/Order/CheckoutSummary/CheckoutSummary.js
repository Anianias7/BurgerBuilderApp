import React from 'react'
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.css"

const CheckoutSummary = ({
                             ingredients,
                             onCheckoutCancelled,
                             onCheckoutContinue
                         }) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div className={classes.Burger}>
                <Burger ingredients={ingredients}/>
            </div>
            <Button btnType="Danger"
                    clicked={onCheckoutCancelled}>CANCEL</Button>
            <Button btnType="Success"
                    clicked={onCheckoutContinue}>CONTINUE</Button>
        </div>
    );

}


export default CheckoutSummary;