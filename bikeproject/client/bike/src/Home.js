import {useNavigate} from "react-router-dom";
import './Table.css';
function Home() {
    const Navigate=useNavigate(); 
    return (
      <>  
      <div className="body">
    <div className="all">
        <div className="bu1">
         
          <button className="bu1" onClick={()=>Navigate('/Owner')}>Owner</button>
        </div>
        <div className="bu2">
          
          <button className="bu2" onClick={()=>Navigate('/Register')}>Register</button>
        </div>
        <div className="bu3">
          <button className="bu3" onClick={()=>Navigate('/Login')}>Login</button>
          </div>
         </div>
         </div>
     
  
  </>
    );
  }
  export default Home;