import { useState } from "react"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../Styles/AdminLogin.css"
import axios from "axios"
const AdminLogin=()=>{
    let[data1,setdata]=useState([])
    let[uname,setuname]=useState("")
    let[password,setpassword]=useState("")
    let navigate=useNavigate()
    // let[username,setusername]=useState("")
    // let[pass,setpass]=useState("")

    // function login(){
        // if(uname=="admin"&& password=="1234"){
        //     alert("login successfull")
        // }
        // else{
        //     alert("invalid data")
        // }
        useEffect(() => {
            axios.get('http://localhost:1000/manager')
                .then((response) => {
                    console.log(response.data);
                    setdata(response.data)
                    // setuname(response.data.uname)
                    // setpassword(response.data.password)
                })
                .catch((err) => {
                    console.log(err);
                })
        }, [])

    // }
    // let[uname,setuname]=useState("");
    // console.log(uname);
    // let[password,setpassword]=useState("");
    function login(e){
        e.preventDefault();
        let a=false;
        data1.map((x)=>{
           if(uname==x.email && password==x.password){
            alert("login successfully")
            navigate("/adminhomepage")
            a=true
           }
        })
        if(a==false){
            alert("invalid data")
        }
        }

    return(
        <div className="adminlogin">
            
            {/* <h1>Admin Login</h1> */}
            <div className="adminlogin_sub">
            {/* <h1>Admin</h1> */}
            <form action="">
                <label htmlFor="">
                    username: <input value={uname} onChange={(e)=>{setuname(e.target.value)}} type="text" placeholder="Enter the name" />
                </label>
                <br />
                <label htmlFor="">
                    password: <input value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder="Enter the password" />
                </label>
               
                <br />
                <button onClick={login}>Login</button>
                <p>Are you new to the page ? <Link to="/adminsignup">SignUp Now</Link></p>
            </form>
            
            </div>
        </div>
    )
}
export default AdminLogin


