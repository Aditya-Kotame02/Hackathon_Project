import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { toast } from 'react-toastify'
import { updateBlog, getBlogById } from '../services/blogs'

function EditBlog() {

  const { blog_id } = useParams()
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')

  useEffect(() => {
    loadBlog()
  }, [])

  const loadBlog = async () => {
    const result = await getBlogById(blog_id)
    if (result && result.status === 'success') {
      setTitle(result.data[0].title)
      setContents(result.data[0].contents)
    }
  }

  const handleUpdate = async () => {
    const body = { blog_id, title, contents }
    const result = await updateBlog(body)

    if (result && result.status === 'success') {
      toast.success("Blog updated!")
    } else {
      toast.error("Failed to update blog")
    }
  }

  return (
    <div className="container mt-4 w-50">
      <h3>Edit Blog</h3>

      <label className='form-label mt-3'>Title</label>
      <input 
        className="form-control"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <label className='form-label mt-3'>Contents</label>
      <textarea 
        className="form-control"
        value={contents}
        onChange={e => setContents(e.target.value)}
      />

      <button className="btn btn-primary mt-3" onClick={handleUpdate}>Update Blog</button>
    </div>
  )
}

export default EditBlog
