


// import React, { useState } from 'react';
// import NavBarManu from './NavBarManu';

// const RestaurantCreate = () => {
//   const [name, setName] = useState(null);
//   const [email, setEmail] = useState(null);
//   const [address, setAddress] = useState(null);
//   const [rating, setRating] = useState(null);

//   const createRestaurant = () => {
//     fetch('http://localhost:3000/restaurant', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name, email, address, rating }),
//     }).then((result) => {
//       result.json().then((resp) => {
//         alert('Restaurant has been added');
//       });
//     });
//   };

//   return (
//     <div>
//       <NavBarManu />
//       <h1>Restaurant Create</h1>
//       <div>
//         <input onChange={(event) => setName(event.target.value)} placeholder="Restaurant Name" /> <br /><br />
//         <input onChange={(event) => setEmail(event.target.value)} placeholder="Restaurant Email" /> <br /><br />
//         <input onChange={(event) => setRating(event.target.value)} placeholder="Restaurant ratio" /> <br /><br />
//         <input onChange={(event) => setAddress(event.target.value)} placeholder="Restaurant Address" /> <br /><br />
//         <button onClick={createRestaurant}>Add Restaurant</button>
//       </div>
//     </div>
//   );
// };

// export default RestaurantCreate;


import React, {useState} from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import NavBarManu from './NavBarManu';
import { useNavigate } from 'react-router-dom';
const RestaurantCreate = () => {
  const Navigate = useNavigate();
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [ratio, setRatio] = useState('');
 const [address, setAddress] = useState('');
 const handleNameChange=(event)=>{
   setName(event.target.value);
 }
 const handleEmailChange=(event)=>{
   setEmail(event.target.value);
 }
 const handleRatioChange=(event)=>{
   setRatio(event.target.value);
 }
 const handleAddressChange=(event)=>{
   setAddress(event.target.value);
 }
 const handleSubmit=(event)=>{
   event.preventDefault();
 };
 const newRestaurant = {
   name: name,
 email:email,
   ratio:ratio,
   address: address
 };
 const addShow = () => {
 axios.post("http://localhost:3000/restaurant" ,newRestaurant)
 .then((respo)=>{
  Navigate ('/list')
   console.warn(respo.data);
   alert('are you add new')
 }) 
 }
  return (
    <div>
         <NavBarManu />
        <h1>
       RestaurantsCreate
       </h1>
         <form onSubmit={handleSubmit}>
     <input type="text" value={name} onChange={handleNameChange}
      placeholder="Restaurant Name" /> <br></br><br /><br />
     <input type="email" value={email}   onChange={handleEmailChange}
      placeholder="Restaurant Email" /> <br></br><br /><br />
      <input type="text"  value={ratio} ratio="ratio" onChange={handleRatioChange}
      placeholder="Restaurant Ratio" /> <br></br><br /><br />
      <input type="text"  value={address} address="address" onChange={handleAddressChange}
      placeholder="Restaurant Address" /> <br></br><br /><br />
    <Button onClick={addShow} type="submit">Add Restaurant</Button>
   </form>
    </div>
  );
}
export default RestaurantCreate;
