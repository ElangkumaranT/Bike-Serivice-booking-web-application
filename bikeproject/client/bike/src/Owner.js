import React, { useEffect, useState } from 'react';
import './Owner.css';
import axios from 'axios';

function Owner() {
    const [pass, setPass] = useState('');
    const [check, setCheck] = useState(false);
    const [items, setItems] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedId, setSelectedId] = useState('');
    const [Email, setEmail] = useState('');
    const [re, setRe] = useState(false);

    function delet() {
        axios.post('https://bike-serivice-booking-server.vercel.app//delet' + selectedId)
        console.log(selectedId);
    }

    function click() {
        if (pass === '123') {
            setCheck(true);
        }
    }

    useEffect(() => {
        axios.get('bike-serivice-booking-server-lzyfj4y2h-elangkumarans-projects.vercel.app/view')
            .then(response => {
                setItems(response.data);
                console.log(items);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    function change() {
        axios.post('bike-serivice-booking-server-lzyfj4y2h-elangkumarans-projects.vercel.app/update', { selectedId, selectedStatus, Email })
            .then((users) => {
                console.log(users)
            })
        setRe(true);
    }

    return (
        <>
            {!check ? (
                <div className='total'>
                <div className="login-section">
                    <h1>Owner Login Page</h1>
                    <label>Password :</label>
                    <input type="text" name="in" onChange={e => setPass(e.target.value)} />
                    <button type="submit" className="button" onClick={click}>Submit</button>
                </div>
                </div>
            ) : (
                <div className="table-section">
                    <h1>Registered List</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>PhoneNumber</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>BikeService</th>
                                <th>OilChange</th>
                                <th>GeneralService</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <tr key={item._id}>
                                    <td>{item.Name}</td>
                                    <td>{item.PhoneNumber}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.Password}</td>
                                    <td>{item.BikeService}</td>
                                    <td>{item.OilChange}</td>
                                    <td>{item.Genderalservice}</td>
                                    <td>{item.Status}</td>
                                    <td>
                                        <select
                                            value={selectedId === item._id ? selectedStatus : ''}
                                            onChange={e => { setSelectedStatus(e.target.value); setSelectedId(item._id); setEmail(item.Email); }}
                                        >
                                            <option value="" disabled>Select</option>
                                            <option value="Working">Working</option>
                                            <option value="Delivery">Delivery</option>
                                            <option value="Completed">Completed</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button onClick={change}>Change</button>
                                    </td>
                                    <td>
                                        <button onClick={delet}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {re && (
                <div className="update-notification">
                    <h1>Updated</h1>
                </div>
            )}
        </>
    );
}

export default Owner;
