import axios from "axios";
import { getLS } from "../LocalStorage/index";

const API_URL = "http://localhost:8000/api";

const getAccessToken = () => {
    return getLS("jwt_token");
};

const getHeaders = (token) => {
    if (!token) token = getAccessToken();
    if (token) {
        console.log(token);
        return {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
    }
    return {
        headers: {
            Accept: "application/json",
        },
    };
};

const post = async (endpoint, body, token = null, form = false) => {
    let options = getHeaders(token);
    if (form) {
        options.headers["Content-Type"] = "multipart/form-data";
    }
    try {
        console.log(options);
        const response = await axios.post(API_URL + endpoint, body, options);
        return response;
    } catch (err) {
        console.error(err?.response?.data || err);
        return err?.response?.data || err;
    }
};

const get = async (endpoint, token = null) => {
    try {
        console.log(token);
        const response = await axios.get(API_URL + endpoint, getHeaders(token));
        return response;
    } catch (err) {
        console.error(err?.response?.data || err);
        return err?.response?.data || err;
    }
};

const put = async (endpoint, body, token = null) => {
    try {
        const response = await axios.put(
            API_URL + endpoint,
            body,
            getHeaders(token)
        );
        return response.data;
    } catch (err) {
        console.error(err?.response?.data || err);
        return err?.response?.data || err;
    }
};

const remove = async (endpoint, token = null) => {
    try {
        const response = await axios.delete(
            API_URL + endpoint,
            getHeaders(token)
        );
        return response.data;
    } catch (err) {
        console.error(err?.response?.data || err);
        return err?.response?.data || err;
    }
};

export { getAccessToken, post, get, put, remove };
