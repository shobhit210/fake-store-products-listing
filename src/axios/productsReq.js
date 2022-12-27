import axios from "axios";

const productsFetch = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {

    }
})

export default productsFetch