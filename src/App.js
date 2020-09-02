import React, {useContext} from 'react';

import {StateContext} from './Store.js';

import API from './API.js';

function App() {
    const [state, dispatch] = useContext(StateContext)

    function loadCustomers() {
        API.get_customers((response) => {
            dispatch({type: "set_customers", payload: response.data});     
        }); 
    }

    function CustomerItem(props) {
        return (
            <div className="CustomerItem">
                <p>{`${props.data.name} - ${props.data.id} - ${props.data.saldo}€`}</p>
            </div>
        );    
    }

    function CustomerList(props) {
        return (
            <div className="UserList">
                {props.customerItems.map(item => (<CustomerItem data={item} key={item.id} />))}
            </div>
        )
    }


    return (
        <div className="App">
            <input type="button" value="Load customers" onClick={loadCustomers} />
            <span><CustomerList customerItems={state.customers} /></span>
        </div>
    );
}

export default App;
