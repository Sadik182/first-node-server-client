import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const {id} = useParams();

  const navigate = useNavigate()

  useEffect( () => {
      getSingleUser();
  },[])

  const getSingleUser = async () => {
    let result = await fetch(`http://localhost:5000/users/${id}`);
    result = await result.json();
    console.log(result);
    setName(result.name);
    setEmail(result.email);
    setPhone(result.phone);
  };
  
  const handleUpdate = async(e) =>  {
    e.preventDefault();
    let result = await fetch(`http://localhost:5000/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({name, email, phone})
    });
    result = await  result.json()
    if(result) {
      navigate('/users');
      alert('Data Update');
    }
  }
    return (
        <div>
           <h1 className="my-3 fw-bold">Update User</h1>
      <Form onSubmit={handleUpdate} className='w-50 mx-auto mt-5 border p-4 rounded-3 form'>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label >Full Name</Form.Label>
          <Form.Control value={name} onChange={(e) => {setName(e.target.value)}} type="text" placeholder="Enter Full Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Enter email" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control value={phone} onChange={(e) => {setPhone(e.target.value)}} type="number" placeholder="Phone Number" required/>
        </Form.Group>
        <Button className='d-block w-100 p-2 fw-bold fs-4' variant="primary" type="submit">
          Update User
        </Button>
      </Form>
        </div>
    );
};

export default Update;