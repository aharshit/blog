import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
function Register(){
const navigate=useNavigate();
const [input,setinput]=useState({
    username:"",
    email:'',
    password:'',
});
const handleregister=async(event)=>{
    event.preventDefault();
    try {
        const res=await axios.post("http://localhost:9000/v1/user/register",input);
        alert(res.data.message);
        navigate("/login");
    } catch (error) {
        alert(error.response.data.message);
    }
}
    return(
        <>
    <h1>Register</h1>
    <form onSubmit={handleregister}>
        Name <input type="text" name="username" value={input.username} onChange={(event)=>setinput({...input,[event.target.name]:event.target.value})}/><br/>
        Password<input type="password" name="password" value={input.password} onChange={(event)=>setinput({...input,[event.target.name]:event.target.value})} /><br/>
        Email<input type="email" name="email" value={input.email} onChange={(event)=>setinput({...input,[event.target.name]:event.target.value})}/><br/>
        <button>submit</button>
    </form>
        </>
    )
}
export default Register;