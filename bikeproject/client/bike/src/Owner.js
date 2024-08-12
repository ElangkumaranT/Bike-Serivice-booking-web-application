import React, { useEffect, useState } from 'react';
import './Table.css';
import axios from 'axios';



function Owner()
{
    const[pass,setPass]=useState('');
    const[check,setCheck]=useState(false);
    const [items, setItems] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedId, setSelectedId] = useState('');
    const [Email,setEmail]=useState('');
    const[re,setre]=useState(false);

    function delet() {
        axios.post('http://localhost:3001/delet'+selectedId)
        console.log(selectedId);

}
    

     function click()
    {
        if(pass==='123')
        {
            setCheck(true);
        }
    }

    useEffect(() => {
        axios.get('http://localhost:3001/view')
            .then(response => {
                setItems(response.data);
                console.log(items);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
          
    }, []);

   
    function change() {
            axios.post('http://localhost:3001/update', {selectedId,selectedStatus,Email})
                .then((users)=>{
  console.log(users)
 
})
                
        setre(true);
    }
   

    
    return(
        <>
        {check===false &&(<>
             
        <h1>Owner login page</h1>
        <label>Password :</label>
        <input type="text" name="in" onChange={e=>setPass(e.target.value)} ></input>
        <button type="submit" className="button "onClick={click} >submit</button></>
        )}
        {check===true &&(
            
            
                <>
                 <div>
            <h1>Registed List</h1>
            <table>
            <thead>
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
    </thead>
    <tbody>
                {items.map(item => (
                    
                    
                     <tr  key={item._id}>
                     <td> {item.Name}</td>
                      <td>{item.PhoneNumber}</td>
                      <td>{item.Email}</td>
                      <td>{item.Password}</td>
                      <td>{item.BikeService}</td>
                      <td>{item.OilChange}</td>
                      <td>{item.Genderalservice}</td>
                      <td>{item.Status}</td>
                      <td>
             
                      <select value={selectedId === item._id ? selectedStatus : ''}
                                                onChange={e => { setSelectedStatus(e.target.value); setSelectedId(item._id); setEmail(item.Email); }}
                                            >
                                                <option value="" disabled>Select</option>
                                                <option value="Working">Working</option>
                                                <option value="Delivery">Delivery</option>
                                                <option value="Completed">Completed</option>
                                            </select>
                                    </td>
        <td><button value="change"onClick={change}>Change</button></td>
        <td><button value="change"onClick={delet}>Delete</button></td>
                      </tr>
                      
                      
                ))}
                
                </tbody>
            </table>
        </div>
                </>
                
            
       
        )
        }

   
       
        {re === true && (
            <h1>updateed</h1>
        )}
         </>
    );

}
export default Owner;