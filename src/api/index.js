import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem("profile")) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
    }

    return req;
})

//cards api
export const getCards = async (cardType) => await API.post('/get-card', {cardType});

// user login/signup apis
export const signup = async (userData) => await API.post('/user/signup', userData);
export const login = async (userData) => await API.post('/user/login', userData);