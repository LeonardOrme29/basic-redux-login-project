import React,{useState} from 'react'
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import {addAuth} from '../features/auth/authSlice.js'
import { useNavigate } from "react-router-dom";

function MainSection() {
    const [correo,setCorreo]=useState('');
    const [password,setPassword]=useState('');
    const [nombre,setNombre]=useState('');
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addAuth({
            nombre:nombre,
            correo:correo,
            password:password,
            imagen:'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
        }));
        navigate('/');
    }
  return (
    <div className="container-sm">
    {/* <forms>
      <input type='email' onChange={(e)=>{setCorreo(e.target.value)}} placeholder='Correo electronico'/>
      <input type='text' onChange={(e)=>{setNombre(e.target.value)}} placeholder='Nombre'/>
      <input type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Contraseña'/>
      <button style={{height:'20px',width:'100px'}} type='submit' onClick={handleSubmit}/>
    </forms> */}
    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" onChange={(e)=>{setCorreo(e.target.value)}} placeholder='Correo electronico' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Contraseña' class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Nombre</label>
            <input type="text" onChange={(e)=>{setNombre(e.target.value)}} placeholder='Nombre' class="form-control" id="exampleInputPassword1"/>
        </div>
        
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </form>
  </div>
  )
}

export default MainSection