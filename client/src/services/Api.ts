import axios, { AxiosInstance } from 'axios';

export default (): AxiosInstance => axios.create({
    baseURL: 'http://localhost:3000'
});
