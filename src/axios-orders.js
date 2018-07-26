import axios from 'axios'

const instance = axios.create({
    baseURL: ' https://my-burger-717f2.firebaseio.com/'
});

export default instance;