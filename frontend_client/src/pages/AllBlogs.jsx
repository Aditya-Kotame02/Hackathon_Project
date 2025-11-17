import React, { useState, useEffect } from 'react'
import { getAllBlogs, searchBlogs } from '../services/blogs'
import { toast } from 'react-toastify'

function AllBlogs() {
  const [blogs, setBlogs] = useState([])
  const [searchText, setSearchText] = useState('');

  const getBlogs = async () => {
    const result = await getAllBlogs() 
    
    if (result) { 
      setBlogs(result.data) 
    } else {
      console.error("Failed to fetch blogs from the API.");
    }
  } 

  const handleSearch = async () => {
    if (!searchText.trim()) {
      getBlogs();
      return;
    }

    const result = await searchBlogs(searchText);

    if (result && result.status =='success') {
      setBlogs(result.data);
      toast.success('Search successful!')
    } else {
      toast.error("No blogs found");
    }
  }

  useEffect(() => {
    getBlogs()
  }, []) 

  return (
    <div className='container mt-4'>
      <div className="container-fluid w-50 mt-3">
        <form className="d-flex" role="search" onSubmit={(e) => {e.preventDefault(); handleSearch();}}>
          <input className="form-control me-2 bi bi-search" type="search" placeholder='Search by title...' aria-label="Search" onChange={(e) => setSearchText(e.target.value)}/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <div className="w-75">
        {blogs && blogs.length > 0 && blogs.map((b, index) => (
          <div key={index}className="border rounded p-4 mb-4 shadow-sm">
            <h4 className="fw-semibold">{b.blog_title}</h4>
            <span className="badge bg-info text-dark mb-3">{b.category_title}</span>
            <p>{b.contents}</p>
            <div className="text-end fst-italic text-muted"> _ by {b.full_name}</div>
          </div>
        ))}
        {blogs && blogs.length === 0 && (<p className="text-center mt-4">No blogs to display.</p>)}
        </div>
      </div>

    </div>
  )
}

export default AllBlogs



