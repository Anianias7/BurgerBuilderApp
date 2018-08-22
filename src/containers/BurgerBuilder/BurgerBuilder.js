import React, {Component} from 'react'

import Aux from '../../hoc/Aux'
import Burger from "../../components/Burger/Burger";
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import MySpinner from '../../components/UI/mySpinner/MySpinner'


const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.6
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false
    };

    updatePurchaseState = () => {
        const ingredients = {
            ...this.state.ingredients
        };
        const sum = Object.keys(ingredients).reduce((amount, ingredient) => amount + ingredients[ingredient], 0);
        this.setState({
            purchasable: sum > 0
        })
    };

    addIngredientHandler = (type) => {
        const ingredients = {...this.state.ingredients};
        ingredients[type] += 1;
        const price = this.state.totalPrice + INGREDIENTS_PRICES[type];
        this.setState({
            ingredients: ingredients,
            totalPrice: price
        }, this.updatePurchaseState);
    };

    removeIngredientHandler = (type) => {
        const ingredients = {...this.state.ingredients};
        ingredients[type] = ingredients[type] <= 0 ? 0 : ingredients[type] - 1;
        const price = this.state.totalPrice - INGREDIENTS_PRICES[type];
        this.setState({
            ingredients: ingredients,
            totalPrice: price
        }, this.updatePurchaseState);
    };

    purchaseHandler = () => {
        this.setState(
            {
                purchasing: true
            }
        )
    };

    orderCancellationHandler = () => {
        this.setState(
            {
                purchasing: false
            }
        )
    };

    orderContinueHandler = () => {
        const queryParams = [];
        for (let i in this.state.ingredients){
                queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i]))
        }
        queryParams.push("price=" + this.state.totalPrice);
        const queryString = queryParams.join("&");
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString,
        });
    };

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCanceled={this.orderCancellationHandler}
            purchaseContinued={this.orderContinueHandler}
            price={this.state.totalPrice}/>;

        if (this.state.loading) {
            orderSummary = <MySpinner/>
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing}
                       modalClosed={this.orderCancellationHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disable={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;