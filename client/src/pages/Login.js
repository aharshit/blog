import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login(){
    const [input,setinput]=useState({
        email:"",
        password:''
    
    });
    const navigate=useNavigate();
    const handlelogin=async(event)=>{
        event.preventDefault();
        try {
            const res=await axios.post("http://localhost:9000/v1/user/login",input);
            alert(res.data.message);
            localStorage.setItem("token",res.data.token);
            localStorage.setItem("name",res.data.name);
            navigate('/');
            
        } catch (error) {
            alert(error.response.data.message);
        }
    };
    return(
        <>
         <h1>Login</h1>
    <form onSubmit={handlelogin}>
        Password<input type="password" value={input.password} name="password" onChange={(event)=>setinput({...input,[event.target.name]:event.target.value})}/><br/>
        Email<input type="email" name="email" value={input.email} onChange={(event)=>setinput({...input,[event.target.name]:event.target.value})}/><br/>
        <button>submit</button>
    </form>
        </>
    )
}
export default Login;