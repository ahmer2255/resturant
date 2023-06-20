

import React, { useState } from 'react';
import { Table, Form, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import NavBarManu from './NavBarManu';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RestaurantSearch = () => {
  const navigate=useNavigate()
  const [searchData, setSearchData] = useState(null);
  const [noData, setNoData] = useState(false);
  const [lastSearch, setLastSearch] = useState('');

  const search = (key) => {
    console.warn(key);
    setLastSearch(key);
    fetch('http://localhost:3000/restaurant?q=' + key).then((data) => {
      data.json().then((resp) => {
        console.warn('resp', resp);
        if (resp.length > 0) {
          setSearchData(resp);
          setNoData(false);
        } else {
          setSearchData(null);
          setNoData(true);
        }
      });
    });
  };

  const deleteRestaurant = (id) => {
    axios.delete( `http://localhost:3000/restaurant/${id}`).then((resp) => {
     navigate('/list')
        alert('Restaurant has been deleted');
       
      })
    
  }

  return (
   <div>
      <NavBarManu />
      <Container>
      <h1>Restaurant Search</h1>
      <Form.Control
        type="text" onChange={(event) => search(event.target.value)}  placeholder="Search restaurant" />
      
        {searchData ? (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Rating</th>
                  <th>Location</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {searchData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.rating}</td>
                    <td>{item.address}</td>
                    <td>
                      <Link to={`/update/${item.id}`}>
                        <FontAwesomeIcon icon={faEdit} color="orange" />{' '}
                      </Link>
                      <span onClick={() => deleteRestaurant(item.id)}>
                        <FontAwesomeIcon icon={faTrash} color="red" />{' '}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          ''
        )}
        {noData ? <h3>No Data Found</h3> : null}
        </Container>
      </div>
    
  );
};

export default RestaurantSearch;
