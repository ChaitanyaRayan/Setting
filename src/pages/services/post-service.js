import axios from "axios";
import authHeader from "./auth-header";


const baseUrl = "http://127.0.0.1:8000/user";

const getAllPublicPosts = () =>{
    return axios.get(baseUrl + "/public")
}

const getAllPrivateData = () =>{
    return axios.get(baseUrl + "/private", {headers: authHeader()});
}

const postService ={
    getAllPublicPosts,
    getAllPrivateData
}

export default postService;