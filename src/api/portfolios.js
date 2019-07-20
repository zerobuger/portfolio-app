import axios from 'axios';

export default axios.create({
    baseURL: 'http://ec2-13-209-88-201.ap-northeast-2.compute.amazonaws.com'
})

// export default axios.create({
//     baseURL: 'http://localhost:3002'
// });