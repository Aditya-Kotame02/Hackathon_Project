import React, { useState, useEffect } from 'react'
import { getCategories } from '../services/categories'
import { addBlog } from '../services/blogs'
import { toast } from 'react-toastify'

function AddBlog() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [categories, setCategories] = useState([])

    useEffect(() => {
        loadCategories()
    }, [])

    const loadCategories = async () => {
        const response = await getCategories()
        if (response.status === 'success') {
            setCategories(response.data)
        }
    }

    const handleAddBlog = async () => {
        if (!title || !description || !category) {
            toast.error("Please fill all fields")
            return
        }

        const body = {
            title,
            contents: description,
            category_id: category,
        }

        const response = await addBlog(body)
        if (response.status === 'success') {
            toast.success("Blog Added Successfully!")
            setTitle('')
            setDescription('')
            setCategory('')
        } else {
            toast.error(error)
        }
    }

    return (
        <div className='container w-75'>
            <div className='mb-3 mt-3'>
                <center><h3>Add Blog</h3></center>
            </div>

            <div className='mb-3'>
                <label className='form-label'>Title</label>
                <input
                    type="text"
                    placeholder='Enter Blog Title'
                    className='form-control'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Description</label>
                <textarea
                    placeholder='Enter Blog Description'
                    className='form-control'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>

            <div className='mb-3'>
                <label className='form-label'>Category</label>
                <select
                    className='form-control'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">-- Select Category --</option>
                    {categories.map(cat => (
                        <option key={cat.category_id} value={cat.category_id}>
                            {cat.title}
                        </option>
                    ))}
                </select>
            </div>

            <center>
                <button className='btn btn-primary' onClick={handleAddBlog}>
                    Add Blog
                </button>
            </center>
        </div>
    )
}

export default AddBlog
