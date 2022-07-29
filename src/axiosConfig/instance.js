import axios from 'axios';


 const axiosInstance=axios.create({
    // baseURL:"https://fakestoreapi.com/",
    baseURL:"https://api.themoviedb.org/3/",
    // headers:{
    //     lang:"ar"
    // },
    params:{
        api_key:"f58c82d228ce38c43a6fd2ff0aa04d60"
    }
})
export default axiosInstance

