import React from 'react'
import { useNavigate } from "react-router-dom";


function Eventcard({events}) {
    const navigate = useNavigate();
    const id=events.id
  return (
    <div onClick={() => navigate(`/event/${id}`)}>
        <p>---------------------------------------------------------------------------</p>
        <p>{events.Event}</p>
        <p>{events.Category}</p>
        <p>{events.Description}</p>
        {/* <p>---------------------------------------------------------------------------</p> */}


    </div>
  )
}

export default Eventcard