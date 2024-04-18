import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AddProduct from "./AddProduct";
import AdminView from "./AdminView";
import Edit from "./Edit";
const AdminHomePage=()=>{
    return(
        <div className="adminhomepage">
        <AdminNavbar/>
        <Routes>
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/adminview" element={<AdminView/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        </Routes>
        </div>
    )
}
export default AdminHomePage;

