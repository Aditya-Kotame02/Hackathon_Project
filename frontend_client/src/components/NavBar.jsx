import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'

export default function NavBar() {
  const navigate = useNavigate()
  const logout = ()=>{
    window.sessionStorage.removeItem('token')
    navigate('/')
  }
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home/all-blogs">Blogs App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/home/all-blogs">Home</Link>
            <Link className="nav-link" to="/home/add-blog">Add Blog</Link>
            <Link className="nav-link" to="/home/add-category">Add Category</Link>
            <Link className="nav-link" to="/home/my-blogs">My Blogs</Link>
            <button className="nav-link" onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  )
}
