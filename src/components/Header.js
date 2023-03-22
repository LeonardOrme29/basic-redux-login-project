import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


function Header() {
  const authState=useSelector(state=>state.auth);
  let usuario=null
  if (authState.user!=null){
    usuario=authState.user;
  }
  return (
    <div className='container-fluid'>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                 <Link class="navbar-brand" to={'/'}>
                    <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                        ICONO
                </Link>
                {
                  usuario!=null &&
                  <div className='navbar-brand'>
                    <img src={usuario.imagen} alt='imagen usuario' width={'50px'}></img>
                  </div>
                }
                {
                  usuario==null &&
                  <div >
                    <ul class="navbar-nav d-flex flex-row">
                        <li class="nav-item">
                            <Link class="nav-link" to={"/login"}>Login</Link>
                        </li>
                    </ul>
                  </div>
                }
                
            </div>
        </nav>
    </div>
  )
}

export default Header