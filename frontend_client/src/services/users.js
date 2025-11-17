import axios from 'axios'
import { toast } from "react-toastify"
import config from '../utils/config'

export async function loginUser(email, password){
    try{
        const userbody = {email, password}
        const url = config.BASE_URL + '/user/signin'
        const response = await axios.post(url, userbody)
        console.log("loginUser"+response.data)
        return response.data
    } catch(ex){
        toast.error(ex)
    }
}

export async function registerUser(full_name, email, password, phone_no) {
    try{
        const url = config.BASE_URL + '/user/signup'
        const body = {full_name, email, password, phone_no}
        const response = await axios.post(url, body)
        return response.data
    }
    catch{
        toast.error(ex)
    }
}