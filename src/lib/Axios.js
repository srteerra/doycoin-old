const axios = require('axios')

const init = async()=>{
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    if (!axios.defaults.headers.common['Authorization']) {
        const res = await axios.post('api/v1/authorization')
        axios.defaults.headers.common['Authorization'] = res.headers.authorization;   
    }
    
}

init()

module.exports = axios
