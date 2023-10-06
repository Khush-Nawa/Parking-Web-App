import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Login() {
  return (
        <div className='my-3 container'>
      <div className='row'>
        <div className='my-3 col-md-6'>
          <Card border="dark">
            <Card.Body>
                <Card.Img src='https://mir-s3-cdn-cf.behance.net/projects/404/161ec8141928897.Y3JvcCw4MjIsNjQzLDIwLDA.png'></Card.Img>
            </Card.Body>
          </Card>
        </div>
        <div className='my-3 col-md-6'>
          <Card border="dark">            
          <Card.Title className='text-center mt-2'>Login Form</Card.Title>
            <Card.Body>
            <Form  className='container'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button as={Link} to="/Parking-Web-App/Home" variant="outline-dark mb-2">
        Login
      </Button>
    </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Login