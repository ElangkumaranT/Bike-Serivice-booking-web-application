import {useState} from 'react';
import axios from 'axios';
import './Table.css';
import image from './tic.png';
function Register()
{
  const [Name,setName]=useState();
  const [Email,setemail]=useState();
  const [PhoneNumber,setphone]=useState();
  const [BikeService,setservice]=useState();
  const [Password,setPass]=useState();
  const [OilChange,setoil]=useState();
  const [Genderalservice,setgenderal]=useState();
  const [mess,Setmess]=useState(false);
  const currentDate = new Date();
const formattedDate = currentDate.toISOString();
console.log(formattedDate)
const Status="Registed";
  const submit=()=>{
    Setmess(true);
axios.post('http://localhost:3001/save',{Name,PhoneNumber,Email,Password,BikeService,OilChange,Genderalservice,Status})
.then((users)=>{
  console.log(users)
 
})

  }
    


if(!mess)
{
return (
  <>
        <div className="form-container">
         
          <form >
          <h1>Register for Services</h1>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" onChange={e=>setName(e.target.value)} name="name" required />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input type="text" name="phone"onChange={e=>setphone(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="text" name="email" onChange={e=>setemail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="text" name="Password" onChange={e=>setPass(e.target.value)} required />
            </div>
            <div>
              
              <br></br>
              <label>Service Type:</label>
            
              <div>
                <label>
                  <input type="checkbox" name="bikeService" onChange={e=>setservice(e.target.value)} />
                  Bike Service
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="oilChange" onChange={e=>setoil(e.target.value)} />
                  Oil Change
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="fullService" onChange={e=>setgenderal(e.target.value)} />
                 Genderalservice
                </label>
              </div>
              
            </div>
            <button type="submit" onClick={submit} className="btn">Register</button>
          </form>
        </div>
        </>
);
}
else
{
return (

<>
<img src={image} alt='no image'></img>
  <h1>register successfully!!!</h1>
 </>
  
  
);
    }
  }
export default Register;