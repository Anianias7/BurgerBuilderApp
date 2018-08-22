import React, {Component} from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import queryString from 'query-string'
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {

    state = {
        ingredients: null,
        price: 0
    };

    componentWillMount() {
        const query = queryString.parse(this.props.location.search);
        const queryStringObject = Object.keys(query).reduce((acc, key) => key === 'price'
            ? {
                ...acc,
                price: query[key]
            }
            : {
                ...acc,
                ingredients: {
                    ...acc.ingredients,
                    [key]: query[key]
                }
            },
            {});
        this.setState({
            ingredients: queryStringObject.ingredients,
            price: queryStringObject.price
        })
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    onCheckoutCancelled={this.checkoutCancelledHandler}
                    onCheckoutContinue={this.checkoutContinuedHandler}/>
                <Route path={this.props.match.url + '/contact-data'}
                       render={() => (<ContactData ingredients={this.state.ingredients}
                                                   price={this.state.price} />)}
                />
            </div>
        )
    }
}

export default Checkout;