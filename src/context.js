import React, { Component } from 'react';

export const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD': 
        return {
            ...state,
            orders: [...state.orders, action.payload],
            total: state.total+action.payload.order.cost
        }
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        orders: [
            { order: {order_name:'abc', cost: 10} },
            { order: {order_name:'123', cost: 20} }
        ],
        total: 30,
        dispatch: (action) => this.setState((state) => reducer(state, action))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;