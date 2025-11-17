import axios from 'axios'
import { toast } from "react-toastify"
import config from '../utils/config'

export async function getAllBlogs() {
    const url = config.BASE_URL + '/blogs/all'
    try {
        const response = await axios.get(url)
        return response.data 
    }
    catch (err) {
        toast.error("Failed to load blogs. Please try again later."); 
        return null; 
    }
}

export async function addBlog(body) {
    const url = config.BASE_URL + '/blogs/add'
    const token = sessionStorage.getItem('token')

    return await axios.post(url, body, {
        headers: {
            user_id: sessionStorage.getItem('user_id'),
            token: token
        }
    }).then(res => res.data)
}

export async function getBlogById(blog_id) {
    const url = config.BASE_URL + `/blog/${blog_id}`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        return null;
    }
}

export async function updateBlog(body) {
    const url = config.BASE_URL + `/blog/update`;

    try {
        const response = await axios.put(url, body, {
            headers: {
                user_id: sessionStorage.getItem('user_id'),
                token: sessionStorage.getItem('token')
            }
        });
        return response.data;
    } catch (err) {
        return null;
    }
}

export async function searchBlogs(title) {
    const url = config.BASE_URL + `/blog/search?title=${encodeURIComponent(title)}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        return null;
    }
}

export async function getMyBlogs() {
  const url = config.BASE_URL + '/blogs/myblogs';

  try {
    const response = await axios.get(url, {
      headers: {
        user_id: sessionStorage.getItem('user_id'),
        token: sessionStorage.getItem('token')
      }
    });
    return response.data;
  } catch (err) {
    return null;
  }
}


export async function deleteBlog(blog_id) {
    const url = config.BASE_URL + `/blogs/delete/${blog_id}`
    try {
        const response = await axios.delete(url, {
            headers: {
                user_id: sessionStorage.getItem('user_id'),
                token: sessionStorage.getItem('token')
            }
        });
        return response.data;
    } catch (err) {
        return null
    }
}



