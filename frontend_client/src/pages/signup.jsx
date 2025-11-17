import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router'
import { toast } from 'react-toastify'
import { registerUser } from '../services/users'

function signup() {
    const navigate = useNavigate()
    const [full_name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone_no, setMobile] = useState('')
    const signup = async () => {
            if(!full_name || !email || !password || !phone_no){
                toast.error("Enter All Details")
                return
            }

            try{
                const result = await registerUser(full_name, email, password, phone_no)
                console.log(result.status)

                if(result.status == 'success'){
                toast.success("Registration Successful !!")
                navigate('/')
                }
                else{
                    toast.error(result.err)
                }
            }catch(err){
                toast.error(err)
            }  
        }
  return (
    <div>
          <div className='mt-5'>
          <center><h3>Register</h3></center>
          <div>
          <div className='container w-50'>
            <div className="mb-3 mt-3">
                <label htmlFor="inputName" className="form-label">Name</label>
                <input type="text" className="form-control" id="inputName" placeholder="Enter Name" onChange={(e)=> setName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email </label>
                <input type="email" className="form-control" id="inputEmail" placeholder="Enter Email" onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <label htmlFor="inputPassword" className="form-label">Password</label>
                <input type="password" id="inputPassword" className="form-control" aria-describedby="passwordHelpBlock" placeholder='Enter Your Password' onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="inputMobile" className="form-label">Mobile </label>
                <input type="text" className="form-control" id="inputMobile" placeholder="Enter Your Mobile" onChange={e => setMobile(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <center><button className='btn btn-primary' onClick={signup}>Register</button></center>
            </div>
            <center>
                <div>
                    <label>Already have an account ? </label>
                    <Link to="/login">Click Here</Link>
                </div>
            </center>
        </div>
        </div>
        </div>
        </div>
  )
}

export default signup
