import axios from "axios"
import config from "../utils/config"
import { toast } from "react-toastify";

export async function addCategory(title) {
    const url = config.BASE_URL + '/category/add' 
    const headers = {
        token : window.sessionStorage.getItem('token')
    }
    const body = {title} 
    try {
        const response = await axios.post(url, body, {headers})
        return response.data
    } catch (error) {
        toast.error(error)
    }
}

export async function getCategories() {
    const url = config.BASE_URL + '/category/all'
    try{
        const response = await axios.get(url)
        return response.data
    }
    catch(err){
        toast.error(err)
    }
}

export async function deleteCategory(category_id) {
    const url = config.BASE_URL + '/category/delete'
    const headers = {
        token : window.sessionStorage.getItem('token')
    }
    const body = { category_id }

    try {
        const response = await axios.delete(url, { data: body, headers: headers })
        return response.data
    } catch (error) {
        toast.error(error)
    }
}

export async function updateCategories(category_id, title) {
    try{
        const url = config.BASE_URL + '/category/update'
        const body = { category_id, title }
        const response = await axios.put(url, body) 
        return response.data
        
    } catch (error) {
        toast.error(error)
    }
}




