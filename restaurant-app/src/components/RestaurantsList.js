




import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import NavBarManu from './NavBarManu';
import { useNavigate } from 'react-router-dom';

function RestaurantsList() {
  const [data, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/restaurant').then((result) => {
      result.json().then((resp) => {
        setList(resp)
      })
    })
  },[])
  // console.warn(list);
 const Delete =(id)=>{
     axios.delete(`http://localhost:3000/restaurant/${id}`).then((resp) => {
      alert("Are you sure?")
 })

 }

 const editResturent = (id) => {
  navigate('/editResturent/' + id)
 }
  return (
    <div>
       <NavBarManu />
      <h1>Restaurants List</h1>
      {
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Ratio</th>
                <th>Address</th>
                <th>Email</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {
                 data.map((item) =>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.ratio}</td>
                    <td>{item.address}</td>
                    <td>{item.email}</td>
                    <td><span onClick={()=>editResturent(item.id)}><FontAwesomeIcon  icon={faEdit} color='orange'/></span>
                    <span onClick={()=>Delete(item.id)}><FontAwesomeIcon  icon={faTrash} color='red'/></span></td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        </div>

      }

    </div >
  );
}


export default RestaurantsList;