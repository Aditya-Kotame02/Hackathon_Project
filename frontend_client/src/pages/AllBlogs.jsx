import React from 'react'

function AllBlogs() {
  return (
    <div className='container'>
    <div className="container-fluid w-50 mt-3" >
    <form className="d-flex" role="search">
      <input className="form-control me-2 bi bi-search" type="search" placeholder='Search by title...'  aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    </div>

    <div className="card mt-3 mb-3">

      <div className="card-body">
        <figure>
          <div className="card-body ">
            <h5 className="card-title">The Future Of Ai</h5>
            <p className="card-text bg-primary ">Technology</p>
            <p className="card-text" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sit autem, impedit quia tempore suscipit assumenda vitae magni ad architecto provident aliquam ipsum deleniti laborum sunt vero eos hic facilis.</p>
          </div>
        </figure>
      </div>
    </div>


    </div>
  )
}

export default AllBlogs
