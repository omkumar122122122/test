import React from 'react'
import { Link } from "react-router-dom";
import  { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

function Eventdetail() {
    const [data,setdata]=useState(null)
    const id=useParams()

     const fetchdata= async(e)=>{
            
    
    
            try {
                const resp=await fetch(`http://localhost:3000/corce/${id}`)
                const data=await resp.json()
                setdata(data)
                setResults(data)
                
                
            } catch (error) {
                
            }
        }
    
    
        useEffect(()=>{
            fetchdata()
        },[])


  return (
    <div>

    </div>
  )
}

export default Eventdetail