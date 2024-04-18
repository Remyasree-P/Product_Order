import { Link } from "react-router-dom";
import "../Styles/AdminNavbar.css"
const AdminNavbar=()=>{
    return(
        <div className="adminnavbar">
            {/* <h1>Admin Navbar </h1> */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl0TKL707hjD9_5-nBhbsMz--BzT4mV9uFQ&usqp=CAU" alt="" />
            <Link to="/adminhomepage/addproduct">Add Product</Link>
            <Link to="/adminhomepage/adminview">view</Link>
        </div>
    )
}
export default AdminNavbar;

