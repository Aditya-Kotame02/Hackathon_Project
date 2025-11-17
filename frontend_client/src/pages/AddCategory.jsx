import React from 'react'

function AddCategory() {
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-12 col-lg-8 w-50'>
        <div className='mb-3 mt-3'>
            <center><h3>Add Category</h3></center>
        </div>
        <div className='mb-3'>
            <label htmlFor="inputName" className='form-label'>Category Name</label>
            <input type="text" className='form-control' id='inputName' placeholder='Enter Category Name' />
        </div>
      
        <center><button className='btn btn-primary'>Add Category</button></center>
        </div>
      </div>

      <div className='col-12 col-lg-4'>
        <div className='p-3 shadow-sm bg-white rounded-3'>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Category</th>
                  <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <div>
                    <button className='btn btn-primary'>Edit</button>
                    <button className='btn btn-danger'>Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AddCategory
