import { faDeleteLeft, faRefresh, faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {
                users.map(user => {
                    return (
                        <tr key = {user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                           <Button variant='outline-primary'>Delete  <FontAwesomeIcon icon={faTrashAlt} /></Button> {' /'}
                            <Button variant='outline-primary ms-2'>Update <FontAwesomeIcon icon={faRefresh} /></Button>
                        </td>
                    </tr>
                    )
                })
            }
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
