import React, { useEffect, useState } from 'react'
import axios from "axios";
import { data } from 'react-router-dom';
import {
    useNavigate,
  } from "react-router-dom";
  

function Login() {
    const [email,setemail]=useState("")
    const [pass,setpass]=useState("")
    const [msg,setmsg]=useState({
        msg:"yes",
        login:"ll"
    })

    const navigate = useNavigate();
    

    const handlesubmit= async (e)=>{
        e.preventDefault();
        try {
            const userdata={
                email,
                pass
            }
            const responce= await axios.post("http://localhost:3000/login",userdata)

            const masseg=await responce.data
            setmsg(masseg)



            
        } catch (error) {
            console.log(error)
            
        }

    }
    useEffect(()=>{
        if(msg.login=="true"){
            navigate("/home")
        }
    })
    

  return (
    <div>
        <form action="" onSubmit={handlesubmit}>
            <input type="text" value={email} placeholder='enter email' onChange={(e)=>{setemail(e.target.value)}} />
            <input type="text" value={pass} placeholder='enter password' onChange={(e)=>{setpass(e.target.value)}} />
            <button type="submit">login</button>
            <p>{msg.msg}</p>
        </form>
    </div>
  )
}

export default Login