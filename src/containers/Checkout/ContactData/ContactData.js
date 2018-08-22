import React, {Component} from 'react'
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css"
import axios from '../../../axios-orders';
import MySpinner from "../../../components/UI/mySpinner/MySpinner";

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false,
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Ania Skrzeszewska',
                address: {
                    street: 'Pogodna 666',
                    zipCode: '666',
                    country: 'USA'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        };

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({
                    loading: false
                })
            })
            .catch(error => {
                this.setState({
                    loading: false
                })
            });
    };

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name"/>
                <input className={classes.Input} type="email" name="email" placeholder="Your Mail"/>
                <input className={classes.Input} type="text" name="street" placeholder="Street"/>
                <input className={classes.Input} type="text" name="postal" placeholder="Postal Code"/>
                <Button clicked={this.orderHandler} btnType={"Success"}>ORDER</Button>
            </form>
        );
        if ( this.state.loading ) {
            form = <MySpinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    };
}

export default ContactData;