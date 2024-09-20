import { useNavigate } from "react-router-dom";
import './Home.css';

function Home() {
    const navigate = useNavigate(); 

    return (
      <div className="home-body">
        {/* Navbar */}
        <div className="navbar">
          <div className="site-title">EK Bike Service</div>
          <ul className="nav-links">
          <li onClick={() => navigate('/')}>Home</li>
            <li onClick={() => navigate('/Owner')}>Owner</li>
            <li onClick={() => navigate('/Register')}>Register</li>
            <li onClick={() => navigate('/Login')}>Login</li>
          </ul>
        </div>

      </div>
    );
}

export default Home;
