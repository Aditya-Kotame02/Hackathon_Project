import React, { useEffect, useState } from 'react'
import { getMyBlogs, deleteBlog } from '../services/blogs'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'

function MyBlogs() {

  const [myBlogs, setMyBlogs] = useState([])
  const navigate = useNavigate()

  const loadMyBlogs = async () => {
    const result = await getMyBlogs()

    if (result && result.status === 'success') {
      setMyBlogs(result.data)
    } else {
      toast.error("Failed to load your blogs")
    }
  }

  const handleDelete = async (blog_id) => {
    const result = await deleteBlog(blog_id)

    if (result && result.status === 'success') {
      toast.success("Blog Deleted!")
      loadMyBlogs()
    } else {
      toast.error("Unable to delete blog")
    }
  }

  const handleEdit = (blog_id) => {
    navigate(`/home/edit-blog/${blog_id}`)
  }

  useEffect(() => {
    loadMyBlogs()
  }, [])

  return (
    <div className="container mt-4">

      <h3 className="mb-4 text-center">My Blogs</h3>

      <div className="d-flex justify-content-center">
        <div className="w-75">

          {myBlogs.length > 0 ? (
            myBlogs.map((b, i) => (
              <div key={i} className="border rounded p-4 mb-4 shadow-sm">

                <h4 className="fw-semibold">{b.blog_title}</h4>

                <span className="badge bg-info text-dark mb-3">{b.category_title}</span>

                <p>{b.contents}</p>

                <div className="text-end">
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => handleEdit(b.blog_id)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(b.blog_id)}
                  >
                    Delete
                  </button>
                </div>

              </div>
            ))
          ) : (
            <p className="text-center mt-4">You have no blogs yet.</p>
          )}

        </div>
      </div>

    </div>
  )
}

export default MyBlogs
