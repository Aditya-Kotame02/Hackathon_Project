import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { addCategory, getCategories, deleteCategory, updateCategories } from '../services/categories'

function AddCategory() {
  const [title, setTitle] = useState('')
  const [categories, setCategories] = useState([])
  const [editingCategory, setEditingCategory] = useState(null)

  useEffect(() => {
    getAllCategories()
  }, [])

  const getAllCategories = async () => {
    const result = await getCategories()
    if (result && result.status === 'success') {
      setCategories(result.data)
    } else {
      toast.error(result.err)
    }
  }

  const handleDeleteCategory = async (category_id) => {
    const result = await deleteCategory(category_id)
    if (result && result.status === 'success') {
      toast.success('Category Deleted')
      getAllCategories()
    } else {
      toast.error('Failed to delete category')
    }
  };

  const handleEditClick = (category) => {
    setEditingCategory(category);
    setTitle(category.title);
  };

  const handleUpdateCategory = async () => {
    const result = await updateCategories(editingCategory.category_id, title);
    if (result && result.status === 'success') {
      toast.success('Category Updated');
      setTitle('');
      setEditingCategory(null);
      getAllCategories();
    } else {
      toast.error('Failed to update category');
    }
  };

  const handleAddCategory = async () => {
    const result = await addCategory(title);
    if (result && result.status === 'success') {
      toast.success('Category Added');
      setTitle('');
      getAllCategories();
    } else {
      toast.error('Failed to add category');
    }
  };

  const handleSubmit = editingCategory ? handleUpdateCategory : handleAddCategory;
  const buttonText = editingCategory ? 'Update Category' : 'Add Category';

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-lg-5 mb-4">
          <div className="p-4 shadow-sm bg-white rounded-3">
            <h4 className="text-center mb-3">{buttonText}</h4>
            <label className="form-label">Category Name</label>
            <input type="text" className="form-control mb-3" placeholder="Enter Category Name" value={title} onChange={e => setTitle(e.target.value)}/>

            <div className="text-center">
              <button className="btn btn-primary" onClick={handleSubmit}>
                {buttonText}
              </button>

              {editingCategory && (
                <button className="btn btn-secondary ms-2"onClick={() => {setTitle('');
                 setEditingCategory(null)}}>Cancel</button>
              )}
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-7">
          <div className="p-4 shadow-sm bg-white rounded-3">
            <h5 className="mb-3">Category List</h5>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((c) => (
                  <tr key={c.category_id}>
                    <td>{c.category_id}</td>
                    <td>{c.title}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => handleEditClick(c)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeleteCategory(c.category_id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;
