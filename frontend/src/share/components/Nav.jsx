import { Link } from "react-router-dom";
import React from 'react'

function Nav() {
  return (
    <div>
      <Link to={"/home"}>events </Link>
      <Link to={"/addevnt"}>add events </Link>
    </div>
  )
}

export default Nav