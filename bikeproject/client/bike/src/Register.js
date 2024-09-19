import { useState } from 'react';
import axios from 'axios';
import './Register.css';
import image from './tic.png';

function Register() {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [PhoneNumber, setPhone] = useState('');
    const [BikeService, setService] = useState('');
    const [Password, setPass] = useState('');
    const [OilChange, setOil] = useState('');
    const [Genderalservice, setGeneral] = useState('');
    const [mess, setMess] = useState(false);

    const Status = "Registered";

    const submit = (e) => {
        e.preventDefault(); 
        setMess(true);
        axios.post('http://bike-serivice-booking-server.vercel.app/save', { Name, PhoneNumber, Email, Password, BikeService, OilChange, Genderalservice, Status })
            .then((users) => {
                console.log(users);
            });
    }

    if (!mess) {
        return (
          <div className='body'>
            <div className="form-container">
                <form>
                    <h1>Register for Services</h1>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" onChange={e => setName(e.target.value)} name="name" required />
                    </div>
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input type="text" name="phone" onChange={e => setPhone(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text" name="email" onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="text" name="Password" onChange={e => setPass(e.target.value)} required />
                    </div>
                    <div>
                        <br />
                        <label>Service Type:</label>
                        <div>
                            <label>
                                <input type="checkbox" name="bikeService" onChange={e => setService(e.target.checked ? 'Bike Service' : '')} />
                                Bike Service
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="checkbox" name="oilChange" onChange={e => setOil(e.target.checked ? 'Oil Change' : '')} />
                                Oil Change
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="checkbox" name="fullService" onChange={e => setGeneral(e.target.checked ? 'General Service' : '')} />
                                General Service
                            </label>
                        </div>
                    </div>
                    <button type="submit" onClick={submit} className="btn">Register</button>
                </form>
            </div>
            </div>
        );
    } else {
        return (
            <div className="success-message">
                <img src={image} alt='Success' />
                <h1>Registered successfully!!!</h1>
            </div>
        );
    }
}

export default Register;
