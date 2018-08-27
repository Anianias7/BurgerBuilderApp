import React, {Component} from 'react'
import Order from "../../components/Order/Order";
import axios from '../../axios-orders'

class Orders extends Component {

    state = {
        orders: [],
        loading: true,
    }

    transformObjectDataIntoArray = (data) => {
        const keys = Object.keys(data);
        return keys.map(key => ({...data[key], id: key}))
    };

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                console.log(response.data)
                this.setState({
                    loading: false,
                    orders: this.transformObjectDataIntoArray(response.data),
                })
            })
            .catch(error => {
                    this.setState({
                        loading: true,
                    })
                }
            )
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order =>
                    <Order key={order.id}
                           id={order.id}
                           ingredients={order.ingredients}
                           price={order.price}/>
                )}
            </div>

        );
    }
}

export default Orders;