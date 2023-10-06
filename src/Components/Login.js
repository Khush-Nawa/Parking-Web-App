import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Function to handle password input change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Function to check if the form is filled
  const isFormFilled = () => {
    return email.trim() !== '' && password.trim() !== '';
  };
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
            <Form className="container">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check required type="checkbox" label="Check me out"/>
        </Form.Group>
        <Button
          as={Link}
          to="/Parking-Web-App/Home"
          variant="outline-dark mb-2"
          type="submit"
          disabled={!isFormFilled()} // Disable the button if the form is not filled
        >
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