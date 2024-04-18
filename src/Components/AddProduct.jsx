import { useState } from "react";
import axios from "axios";
const AddProduct=()=>{
    let[Category,setcategory]=useState("")
    // console.log(Category);
    let[Restaurant,setrestaurant]=useState("")
    let[dish,setdish]=useState("")
    let[price,setprice]=useState("")
    let[quantity,setquantity]=useState("")
    let[url,seturl]=useState("")
    let data={Category,Restaurant,dish,price,quantity,url}

    let Add=()=>{
        axios.post("http://localhost:1000/product",data)
        .then(()=>{
            alert("product added successfully")
        })
        .catch(()=>{
            alert("failed")
        })
    }
   return(
    <div className="addproduct">
        {/* <h1>hooi</h1> */}
        <form onSubmit={Add} action="">
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
            <button>Add</button>
        </form>
    </div>
   ) 
}
export default AddProduct;

