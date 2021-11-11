import axios from 'axios'

const api = axios.create({
    baseURL : 'http://localhost:4000/api/v1',
    headers: {
        "Content-Type":"application/json"
    }
})



api.interceptors.request.use(function (config) {
    const tokitoki = localStorage.getItem('token');
    config.headers.Authorization = 'Bearer ' + tokitoki
    return config
})

api.interceptors.response.use(
    (res) => {
        return res
    },
    async (err) => {
        const origconfig = err.config
        console.log('err : ',err.config);
        if(origconfig.url !== '/auth/signin' && err.response){
            // Access Token was expired
            if(err.response.status === 403 && !origconfig._retry) {
                console.log('Access token was expired!');
                origconfig._retry = true
                try{
                    const meow = await api.post('refreshmeow', {
                        student_number: localStorage.getItem('student_number'),
                        refreshToken: localStorage.getItem('refreshToken')
                    })
                    
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
                    return err
                }
            }
        }
        return err
    }
)

export default api