import axios from 'axios'

const api = axios.create({
    withCredentials : true,
    baseURL : 'http://localhost:4000/api/v1',
    timeout: 10000, 
    headers: {
        "Content-Type":"application/json"
    }
})

api.interceptors.request.use(function (config) {
    const toktok = localStorage.getItem('token');
    config.headers.Authorization = 'Bearer ' + toktok
    return config
})

api.interceptors.response.use(
    (res) => {
        // dito response. 
        const origconfig = res.config
        console.log(origconfig.url);
        if(res.config.url === "login"){
            
        }
        return res
    },
    async (err) => {
        const origconfig = err.config
        console.log(origconfig.url !== 'login');
        if(origconfig.url !== 'login' && err.response){
            // Access Token was expired
            if(err.response.status === 400 && !origconfig._retry) {
                console.log('Access token was expired!');
                origconfig._retry = true
                try{
                    const meow = await api.post('refreshmeow')
                    console.log('data : ',meow.data);
                    if(meow.status === 400){
                        alert('please login again.')
                        localStorage.clear();
                        window.location.href = '/'
                    }
                    else{
                        // meron nang new access token.
                        localStorage.setItem('token', meow.data.accessToken)
                        return api(origconfig);
                    }
                }
                catch(error){
                    console.log(error);
                    return Promise.reject(error)
                }
            }
            else if (err.response.status === 401){
                alert('Please log in again.')
                window.location.href = '/'
            }
        }
        /*
        else if (err.request){
            alert('System under maintenance! please try again later.')
        }
        */
        return Promise.reject(err)
    }
)

export default api