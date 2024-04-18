import axios from "axios"
import { useEffect, useState } from "react"
import "../Styles/AdminView.css"
import { useNavigate } from "react-router-dom"
const AdminView=()=>{
    let[data1,setdata]=useState([])
    let navigate=useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:1000/product")
        .then((res)=>{
            console.log(res.data);
            setdata(res.data)
        })
    })
    let Edit=(id)=>{
        navigate(`/adminhomepage/edit/${id}`)
    }
    let remove=(id)=>{
        axios.delete(`http://localhost:1000/product/${id}`)
        .then((res)=>{
            console.log(res);
            alert("product removed sucessfully")
        })
        .catch((err)=>{
            console.log(err);
            alert("error in deleting the item")
        })
    }
    return(
        <div className="adminview">{
            data1.map((x)=>{
                return(
                    <div className="display">
                        <h1>{x.Category}</h1>
                        <h1>{x.Restaurant}</h1>
                        <h1>{x.dish}</h1>
                        <h1>{x.price}</h1>
                        <h1>{x.quantity}</h1>
                        <img src={x.url} alt="" />
                        <br />
                        <button onClick={()=>{Edit(x.id)}}>Edit</button>
                        <button onClick={()=>{remove(x.id)}}>Delete</button>
                    </div>
                )
            })
        }
        </div>
    )
}
export default AdminView;