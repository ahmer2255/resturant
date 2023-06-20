

import React,{useEffect, useState} from 'react'
import { useNavigate, useParams  } from 'react-router-dom'
import axios from 'axios'
import { Button } from 'react-bootstrap';
import NavBarManu from './NavBarManu';

function RestaurantsEdit(){
const navigate=useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [ratio, setRatio] = useState('');
  const [address, setAddress] = useState('');

  const params = useParams('id');
  useEffect(() => {
    axios.get(`http://localhost:3000/restaurant/${params.id}`)
    .then((respo)=>{
      console.log(respo)
       setAddress(respo.data.address);
       setName(respo.data.name);
       setRatio(respo.data.ratio);
       setEmail(respo.data.email);
    })
  }, []);




   const addShow =  () => {
    const data ={
        name: name,
        email:email,
        ratio:ratio,
        address: address
    }
     axios.put( "http://localhost:3000/restaurant/"+params.id,data)
    .then((respo)=>{
    navigate('/list')
    alert('Date upload')
   
    })
    
   
    }
  return (
    <div>
        <NavBarManu />
      <h1>RestaurantsUpdate</h1>
        <input type="text" defaultValue={name} onChange={e => setName(e.target.value)}  placeholder='name' /> <br></br><br></br>
        <input type="email" defaultValue={email} onChange={e => setEmail(e.target.value)} placeholder='email'/> <br></br><br></br>
        <input type="text" defaultValue={ratio}  onChange={e => setRatio(e.target.value)} placeholder='ratio'/> <br></br><br></br>
        <input type="text" defaultValue={address}  onChange={e => setAddress(e.target.value)} placeholder='address'/> <br></br>
        <Button onClick={addShow}>update Restaurant</Button>
    </div>
  )
}

export default RestaurantsEdit;
