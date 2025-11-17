import React, { useState }  from 'react'

function AddBlog() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
  return (
    <div className='container w-75'>
        <div className='mb-3 mt-3'>
            <center><h3>Add Blog</h3></center>
        </div>
        <div className='mb-3'>
            <label htmlFor="inputName" className='form-label'>Title</label>
            <input type="text" className='form-control' id='inputName' placeholder='Enter Blog Title' value={title} />
        </div>
        <div className='mb-3'>
            <label htmlFor="inputDesc" className='form-label'>Description</label>
            <textarea type="text" className='form-control' id='inputDesc' placeholder='Enter Blog Description' value={description} />
        </div>
        <div className='mb-3'>
            <label htmlFor="inputPrice" className='form-label'>Category</label>
            <input type="number" className='form-control' id='inputPrice' placeholder='Enter Blog Category' value={category}/>
        </div>
        <center><button className='btn btn-primary'>Add Blog</button></center>
    </div>
  )
}

export default AddBlog
