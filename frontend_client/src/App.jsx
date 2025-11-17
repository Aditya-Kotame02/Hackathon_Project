import { createContext, useState } from "react";
import { ToastContainer } from 'react-toastify';
import { Route, Routes, Navigate} from "react-router";

import AddBlog from './pages/AddBlog';
import AddCategory from "./pages/AddCategory";
import MyBlogs from "./pages/MyBlogs";
import Login from './pages/signin';
import Register from './pages/signup';
import AllBlogs from "./pages/AllBlogs";
import Home from "./pages/Home1" 

export const UserContext = createContext(null); 

// const ProtectedRoute = ({ users, children }) => {
//   if (!users) {
//     return <Navigate to="/" replace />;
//   }
//   return children ? children : <Outlet />; 
// };

function App() {
  const [currentUser, setCurrentUser] = useState(null); 

  return (
    <>
      <UserContext.Provider value={{ user: currentUser, setUser: setCurrentUser }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
             <Route path="/home" element={currentUser ? <Home /> : <Navigate to='/'/>}>
              <Route index element={<AllBlogs />} />
              <Route path="all-blogs" element={<AllBlogs />} /> 
              <Route path="add-blog" element={<AddBlog />} /> 
              <Route path="add-category" element={<AddCategory />} /> 
              <Route path="my-blogs" element={<MyBlogs />} /> 
            </Route>
        </Routes>
      </UserContext.Provider>
      <ToastContainer />
    </>
  );
}

export default App;
