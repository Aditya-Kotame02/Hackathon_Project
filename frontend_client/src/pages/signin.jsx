import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router'
import { loginUser } from '../services/users'
import { UserContext } from '../App'
import { toast} from 'react-toastify'

function signin() {
    const {users, setUser} = useContext(UserContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signin = async() => {
        if(!email && !password){
            toast.error("Enter All Fields!!")
        }

        try{
        const result = await loginUser(email, password)
        console.log(result)
        console.log(result.status)
        if(result.status == "success"){
            window.sessionStorage.setItem('token', result.data.token)
            setUser({
                name: result.data.full_name,
                email: result.data.email,
                mobile: result.data.phone_no
            })
            toast.success('Login Sucessfully!')
            navigate('/home')
        }
        else{
            toast.error(result.err)
        }
    }catch(err){
        console.log(err)
    }
}
  return (
    <div className='mt-5'>
    <center><h1>Login</h1></center>
      <div className='container w-50'>
        <div className="mb-3 mt-3">
            <label htmlFor="inputEmail" className="form-label">Email </label>
            <input type="inputEmail" className="form-control" id="inputEmail" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='mb-3'>
            <label htmlFor="inputPassword" className="form-label">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='mb-3'>
            <center><button className='btn btn-primary' onClick={signin} >SignIn</button></center>
        </div>
        <center>
        <div>
            <label>Dont't have an account ? </label>
            <Link to="/register">Click Here</Link>
        </div>
        </center>
    </div>
    </div>
  )
}

export default signin
