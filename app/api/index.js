import axios from 'axios';

const passData = ({data}) => data;

const throwErrorData = ({response: { data } }) => { throw data; };

const apiInstance = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? '' : '/api'
});
// export const items = () => axios.get('/api/get-items')
const getItems = () => apiInstance.get('/get-items')
    .then(passData)
    .catch(throwErrorData);


const checkout = items => apiInstance.post('/checkout', {items})
    .then(passData)
    .catch(throwErrorData);


export default {
    getItems,
    checkout
};
