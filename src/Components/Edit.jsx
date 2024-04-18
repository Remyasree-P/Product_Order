import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Edit=()=>{
    let[Category,setcategory]=useState("")
    let[Restaurant,setrestaurant]=useState("")
    let[dish,setdish]=useState("")
    let[price,setprice]=useState("")
    let[quantity,setquantity]=useState("")
    let[url,seturl]=useState("")
    let param=useParams()
    let data={Category,Restaurant,dish,price,quantity,url}

    useEffect(()=>{
        axios.get(`http://localhost:1000/product/${param.id}`)
        .then((res)=>{
            console.log(res.data);
            setcategory(res.data.Category);
            setrestaurant(res.data.Restaurant)
            setdish(res.data.dish)
            setprice(res.data.price)
            setquantity(res.data.quantity)
            seturl(res.data.url)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    let Edit=(()=>{
        axios.put(`http://localhost:1000/product/${param.id}`,data)
        .then((res)=>{
            alert("data added successfully")
        })
        .catch((err)=>{
            alert("invalid ")
        })
    })
    return(
        <div className="Edit">
            {/* <h1>hellooi</h1> */}
            <form onSubmit={Edit} action="">
            <label htmlFor="">
                Category : <select value={Category} onChange={(e)=>{setcategory(e.target.value)}}>
                    <option value="">Veg</option>
                    <option value="">NonVeg</option>
                </select>
            </label>
            <br />
            Restaurant Name: <input value={Restaurant} onChange={(e)=>{setrestaurant(e.target.value)}} type="text" placeholder="Enter the Restaurant Name" />
            <br />
            Dish : <input value={dish} onChange={(e)=>{setdish(e.target.value)}} type="text"  placeholder="Enter the dish name"/>
            <br />
            Price: <input value={price} onChange={(e)=>{setprice(e.target.value)}} type="tel" placeholder="enter the price" />
            <br />
            Quantity: <input value={quantity} onChange={(e)=>{setquantity(e.target.value)}} type="tel" placeholder="Enter the quantity" />
            <br />
            Url: <input value={url} onChange={(e)=>{seturl(e.target.value)}} type="text" placeholder="Enter the url" />
            <br />
            <button>Submit Edit</button>
        </form>
        </div>
    )
}
export default Edit;