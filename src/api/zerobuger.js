import axios from 'axios';

export default axios.create({
    baseURL: 'http://ec2-54-180-98-50.ap-northeast-2.compute.amazonaws.com'
})