import React from "react"
import { Link } from "react-router-dom"
import { HOME_PAGE_TITLE, LOGIN_PAGE_TITLE, PROFILE_PAGE_TITLE } from "../../constants/textConstants"

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to='/'>{HOME_PAGE_TITLE}</Link>      
      </li>
      <li>
        <Link to='/login' >{LOGIN_PAGE_TITLE}</Link>
      </li>
      <li>
        <Link to='/profile'>{PROFILE_PAGE_TITLE}</Link>
      </li>
    </ul>
  )
}

export default NavBar
