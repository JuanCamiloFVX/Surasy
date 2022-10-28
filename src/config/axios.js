import axios from "axios";


const ClientAxios = axios.create({
    baseURL:'http://181.142.96.93:4000/'
})
   

export default ClientAxios;