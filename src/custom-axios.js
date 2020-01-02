import Axios from "axios";
export const customAxios = Axios.create({
    baseURL: 'https://project-42b55.firebaseio.com'
})