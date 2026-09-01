import React from 'react'
import { useState } from 'react';
import Nav from '../../share/components/Nav';
import axios from "axios";





function Addevent() {

    const[ennt,setevent]=useState("")
    const[decp,setdecp]=useState("")
    const[loc,seteloc]=useState("")
    const[date,setdate]=useState("")
    const[ecatogary,setcat]=useState("")
    const[msg,setmsg]=useState("")


    async function handlesubmit(e){
        e.preventDefault();
     try {
        const newevent={
            Event:ennt,
            Category:ecatogary,
            Location:loc,
            Date:date,
            Description:decp,
            
        }
        const responce= await axios.post("http://localhost:3000/events",newevent)
        setmsg(responce.data)
        
        

        
     } catch (error) {
        console.log(error)
        
     }
    }



  return (
    <div>
        <Nav></Nav>
        <form action="" onSubmit={handlesubmit}>
            <input type="text" placeholder=' enter event name ' onChange={(e)=>{setevent(e.target.value)}}/>
            <input type="text" placeholder=' enter event description ' onChange={(e)=>{setdecp(e.target.value)}} />
            <input type="text" placeholder=' enter event catagory  ' onChange={(e)=>{setcat(e.target.value)}} />
            <input type="text" placeholder=' enter event location' onChange={(e)=>{seteloc(e.target.value)}} />
            <input type="text" placeholder=' enter event date' onChange={(e)=>{setdate(e.target.value)}} />
            <button type="submit">add event</button>
        </form>
    </div>
  )
}

export default Addevent