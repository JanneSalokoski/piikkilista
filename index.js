import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';

import {Store} from './src/Store.js';

console.log(Store);

import App from './src/App.js';
users

if (module.hot) {
    module.hot.accept();
}

/*function App() {
    const [data, setData] = useState("NO DATA");
    const [input, setInput] = useState("");

    function handleGetClick() {
        axios.get("https://www.salokoski.eu/socket/")
            .then(response => {
                setData(response.data.name);
            })
            .catch(error => {
                console.log(error);
            });
    }

    function handleChange(event) {
       setInput(event.target.value); 
    }

    function handlePostClick() {
        axios.post("https://www.salokoski.eu/socket/", {data: input})
            .then(response => {
                setData(response.data.name);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <div>
                <span>{data}</span>
            </div>
            <div>
                <input type="button" value="GET" onClick={handleGetClick}></input>
            </div>
            <div>
                <input type="text" onChange={handleChange} value={input}></input>
                <input type="button" value="POST" onClick={handlePostClick}></input>
            </div>
        </div>
    );
}*/

ReactDOM.render((
    <Store>
        <App />
    </Store>
), document.getElementById("root"));
