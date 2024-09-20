import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Table.css';

function Login() {
  const [items, setItems] = useState([]);
  const[pass,setPass]=useState('');
  const[mail,setMail]=useState('');
  const [personDetails, setPersonDetails] = useState(null);
  const[check,setCheck]=useState(false);

  useEffect(() => {
    axios.get('https://bike-serivice-booking-server.vercel.app/view')
        .then(response => {
            setItems(response.data);
            console.log(items);
        })
        .catch(error => {
            console.error('There was an error fetching the data!', error);
        });
}, []);

const validateCredentials = () => {
    const person = items.find(item => item.Email === mail && item.Password === pass); // Adjust this based on your actual item structure
    if (person) {
        setPersonDetails(person);
        setCheck(true);
      
    } else {
        setPersonDetails(null);
        setCheck(true);
    }
};
 
  return (
  <>
  
  {check===false &&(
      <div className="form-container">
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email"   onChange={e=>setMail(e.target.value)}required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password"onChange={e=>setPass(e.target.value)}required />
          </div>
          <button type="submit" className="btn" onClick={validateCredentials}>Login</button>
        </form>
      </div>
  
  )}
      {check===true &&(personDetails ? (

      
                    <div>
                        <h2>Person Details</h2>
                        <table>
    <tr>
      <th>Name</th>
      <th>PhoneNumber</th>
      <th>Email</th>
      <th>Password</th>
      <th>BikeService</th>
      <th>OilChange</th>
      <th>Genderalservice</th>
      <th>Status</th>
    </tr>
                         <tr>
                       <td> {personDetails.Name}</td>
                        <td>{personDetails.PhoneNumber}</td>
                        <td>{personDetails.Email}</td>
                        <td>{personDetails.Password}</td>
                        <td>{personDetails.BikeService}</td>
                        <td>{personDetails.OilChange}</td>
                        <td>{personDetails.Genderalservice}</td>
                        <td>{personDetails.Status}</td>
                        </tr>
                        {/* Add other details you want to display */}
                        </table>
                    </div>
                    
               
                    
                ): (
                  <p>Email or password is incorrect</p>
              )
              )}
  
  
  </>         
);
  }


  export default Login;