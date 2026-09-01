import React from 'react'

function Eventcard({events}) {
  return (
    <div>
        <p>---------------------------------------------------------------------------</p>
        <p>{events.Event}</p>
        <p>{events.Category}</p>
        <p>{events.Description}</p>
        {/* <p>---------------------------------------------------------------------------</p> */}


    </div>
  )
}

export default Eventcard