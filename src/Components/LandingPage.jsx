import { Link } from 'react-router-dom';
import "../Styles/LandingPage.css";
const LandingPage = () => {
    return (
        <div className="landingpage">
            <h1>Landing Page</h1>
            <div className="landpage_sub">
                <Link to="/userlogin">
                    <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="" />
                    <h5>User Login</h5>
                    </Link>
                <Link to="/adminlogin">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyOel_Kg6LSBouZjynF0WO9JxBmTQR1KOpRg&usqp=CAU" alt="" />
                    <h5>Admin Login</h5>
                    </Link>
            </div>


        </div>
    )
}
export default LandingPage;