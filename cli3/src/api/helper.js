import axios from 'axios'

export function get(url, parmas) {
    return function() {
        return axios.get(url, { parmas }).then((res) => {
            const { errno, data} = res.data;
            if(errno == 0) {
                return data
            }
        }).catch(()=>{
        })
    }
}