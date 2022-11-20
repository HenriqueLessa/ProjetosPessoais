import axios from 'axios'
import _baseUrl from '@/api/const'

const api = {
    data(){
        return{
            baseUrl: _baseUrl,
        }
    },

    status() {
        const request = axios.get(`${_baseUrl}/status`)
            .then(resp => { console.log (resp.data) })
            .catch(erro => { console.log(erro) })

        return request;
    }
}

export default api;