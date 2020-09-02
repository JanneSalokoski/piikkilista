import React, { useReducer } from 'react';

function reducer(state, action) {
    let newState = {...state};
    switch (action.type) {
        case 'set_customers':
            console.log(action);
            newState.customers = action.payload;
            return newState; 
    }
}

const StateContext = React.createContext();

function Store(props) {
    const [state, dispatch] = useReducer(reducer, {customers: []});

    return (
        <StateContext.Provider value={[state, dispatch]}>
            {props.children}
        </StateContext.Provider> 
    );
}

export {Store, StateContext};
