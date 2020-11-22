import Axios from 'axios';

const axiosClient = Axios.create({
    baseURL: 'https://api.punkapi.com/v2/'
});

export default axiosClient;