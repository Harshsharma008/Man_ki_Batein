// import React from 'react'

import { useDispatch } from "react-redux"
import authService from "../../Appwrite/conf"
import { logout } from "../../Store/authSlice"

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const logoutHandler=()=>{
        authService.logout().then( ()=>{
            dispatch(logout())
        })
    }
  return (
    <button className="inline-block px-6 py-2 duration-200">Logout</button>
  )
}

export default LogoutBtn