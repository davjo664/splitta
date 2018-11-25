import React, { Component } from 'react';

export const Context = React.createContext();

const articles = {
    "Pizza": [{name:'Hawaii', price: 80, ingredients: 'Skinka, ost, ananas'},{name:'Vezuvio', price: 75, ingredients: 'Skinka, ost'}],
    "Sallad": [{name:'Kebabsallad', price: 80, ingredients: 'Kebab, tomat, sallad, gruka'}],
    "Pasta": [{name:'Carbonara', price: 85, ingredients: 'Bacon, grädde, parmesanost'}]
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD': 
        return {
            ...state,
            orders: [...state.orders, action.payload],
            total: state.total+action.payload.cost
        }
        case 'REMOVE': 
        let total = state.total;
        let orders = state.orders.filter((order) => {
            if(order.name === action.payload.name) {
                total = total-order.cost;
                return false;
            }
            return true;
        })
        return {
            ...state,
            orders: orders,
            total: total
        }
        case 'SWITCH': 
        return {
            ...state,
            articles: articles[action.payload.name],
            articlesTitle: action.payload.name
        }
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        articlesTitle: "Pizza",
        articles: articles["Pizza"],
        orders: [],
        total: 0,
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