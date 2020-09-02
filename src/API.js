import axios from 'axios';

function get_request(url, parameters, callback) {
    axios.get(url, {parameters})
        .then((response) => {
            console.log("1", response);
            callback(response);
        })
        .catch((error) => {
            console.log(error);
        })
}

function post_request(url, parameters, callback) {
    axios.post(url, parameters)
        .then((response) => {
            callback(response);
        })
        .catch((error) => {
            console.log(error);
        })
}

const base_url = "http://www.salokoski.eu/socket";

const API = {
    get_customer: (id, callback) => {
        get_request(`${base_url}/get_customer.php`, {id: id}, callback);
    },

    get_customers: (callback) => {
        get_request(`${base_url}/get_customer.php`, {}, callback);
    }
};

export default API;
