import axios from "axios";

const API = axios.create({baseURL: 'http://localhost:5000'});

API.interceptors.request.use((req) =>{
    if (localStorage.getItem('accessToken')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
    }
    return req
})

/**
 * TODO: api authenticate
 * */
export const signup = async (formData) => {
   return await API.post('/api/v1/signup', formData)
}

