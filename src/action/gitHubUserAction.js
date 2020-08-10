import axios from 'axios';

/**
 * Search for Github users as per the username provided.
 * 
 * @param {string} username 
 * @param {int} pageNo 
 * @param {int} noOfItems 
 */
export function searchUser(username, pageNo, noOfItems) {
    const url = `https://api.github.com/search/users?q=${username}+in:login&page=${pageNo}&per_page=${noOfItems}`;

    const request = axios.get(url)
        .then((response) => {
            return response.data;
        })
        .catch((error) => (error.response));

    return {
        type: 'SEARCH_RESULT',
        payload: request
    }
}

/**
 * Get all details of an induvidual user
 * 
 * @param {string} username 
 */
export function getUserDetails(username) {
    const url = `https://api.github.com/users/${username}`;

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

/**
 * Get Followers of the given user.
 * as per the username
 * 
 * @param {string} username 
 */
export function getFollowers(username) {
    const url = `https://api.github.com/users/${username}/followers`;

    const request = axios.get(url)
        .then((response) => {
            return response.data;
        })
        .catch((error) => (error.response));

    return {
        type: 'GET_USER_FOLLOWERS',
        payload: request
    }
}

/**
 * Get Followings of the given user.
 * as per the username
 * 
 * @param {string} username 
 */
export function getFollowings(username) {
    const url = `https://api.github.com/users/${username}/following`;

    const request = axios.get(url)
        .then((response) => {
            return response.data;
        })
        .catch((error) => (error.response));

    return {
        type: 'GET_USER_FOLLOWINGS',
        payload: request
    }
}

/**
 * Get Repositories of the given user.
 * as per the username
 * 
 * @param {string} username 
 */
export function getRepos(username) {
    const url = `https://api.github.com/users/${username}/repos`;

    const request = axios.get(url)
        .then((response) => {
            return response.data;
        })
        .catch((error) => (error.response));

    return {
        type: 'GET_USER_REPOS',
        payload: request
    }
}