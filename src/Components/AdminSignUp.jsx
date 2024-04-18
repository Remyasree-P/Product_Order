import { useState } from "react";
import "../Styles/AdminSignUp.css"
import axios from "axios"
const AdminSignUp = () => {
    let [name, setname] = useState("");
    console.log(name);
    let [email, setemail] = useState("");
    let [password, setpassword] = useState("");
    let [phoneno, setphoneno] = useState("");
    let[profileImage,setprofileimage]=useState("")
    let admins={name,email,password,phoneno,profileImage}
    let addAdmin=(e)=>{
       e.preventDefault()
        // fetch("http://localhost:1000/manager",{
        //     method:"POST",
        //     headers :{"Content-Type":"application/json"},
        //     body :JSON.stringify(admins)
        // })
        // .then((res)=>{
        //     console.log(res);
        //     alert("data added successfully")
        // })
        // .catch((err)=>{
        //     console.log(err);
        //     alert("invalid data")
        // })
        axios.post("http://localhost:1000/manager",admins)
        .then((res)=>{
            console.log(res);
            alert("data added successfully")
        })
        .catch((err)=>{
            console.log(err);
            alert("invalid data")
        })

    }

    return (
        <div className="adminsignup">
            {/* <h1>AdminSignUp</h1> */}
            <div className="admin_sign">
                <form onSubmit={addAdmin} action="">
                    <label htmlFor="">
                        AdminName: <input value={name} onChange={(e) => { setname(e.target.value) }} required type="text" placeholder="Enter the name" />
                    </label>
                    <br />
                    <label htmlFor="">
                     AdminEmail  : <input value={email} onChange={(e) => { setemail(e.target.value) }} type="text" placeholder="enter the email address" />
                    </label>
                    <br />
                    <label htmlFor="">
                     AdminPassword: <input value={password} onChange={(e) => { setpassword(e.target.value) }} type="password" placeholder="enter the password" />
                    </label>
                    <br />
                    <label htmlFor="">
                       PhoneNumber: <input value={phoneno} onChange={(e) => { setphoneno(e.target.value) }} type="tel" placeholder="enter the phone number" />
                    </label>
                    <br />
                    <label htmlFor="">
                        ProfileImage: <input value={profileImage} onChange={(e)=>{setprofileimage(e.target.value)}} type="text" placeholder="enter the profile url" />
                    </label>
                    <button>Register</button>
                </form>
            </div>
        </div>
    );
}

export default AdminSignUp;