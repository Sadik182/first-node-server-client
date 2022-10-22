import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './AddUser.css'

const AddUser = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const phoneRef = useRef('');
    const navigate = useNavigate()

    const handleAddUser = e => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const usersData = {name, email, phone}

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(usersData)
        })
        .then(res => res.json())
        .then(data => {
            if(data) {
              alert('Users Added Successfully!');
              navigate('/users');
              e.target.reset();
            }

        })
    }
  return (
    <div>
        <h1 className="my-3 fw-bold">Add New User</h1>
      <Form onSubmit={handleAddUser} className='w-50 mx-auto mt-5 border p-4 rounded-3 form'>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label >Full Name</Form.Label>
          <Form.Control ref={nameRef} type="text" placeholder="Enter Full Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control ref={phoneRef} type="number" placeholder="Phone Number" required/>
        </Form.Group>
        <Button className='d-block w-100 p-2 fw-bold fs-4' variant="primary" type="submit">
          Add User
        </Button>
      </Form>
    </div>
  );
};

export default AddUser;
