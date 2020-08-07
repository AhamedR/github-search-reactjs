import axios from 'axios';

export function searchUser(username, pageNo, noOfItems) {
    const url = `https://api.github.com/search/users?q=${username}+in:login&page=${pageNo}&per_page=${noOfItems}`;

    const request = axios.get(url)
        .then((response) => {
            return response.data;
        })
        .catch((error) => (error.response));

    return {
        type: 'GET_USER_DETAILS',
        payload: request
    }
}