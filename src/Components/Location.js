import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Location() {
  return (
    <div className='my-3 container'>
      <div className='row'>
        <div className='my-3 col-md-6'>
          <Card border="dark">
            <Card.Body>
            <Form>
            <InputGroup className="mb-3">
              <InputGroup.Text>Desired Location:</InputGroup.Text>
              <Form.Control aria-label="Desired Location" name="desiredLocation" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Your Current Location:</InputGroup.Text>
              <Form.Control aria-label="Current Location" name="currentLocatione" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Preferred Time and Date</InputGroup.Text>
              <Form.Control type='datetime-local' aria-label="Prefered Date" name="entryDate" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Parking Duration/Hours:</InputGroup.Text>
              <Form.Control type='number' aria-label="Parking Duration" name="parkingDuration" />
            </InputGroup>
            <Button as={Link} to="/ParkingSpot" variant="outline-dark" type="submit">
              Submit
            </Button>
          </Form>
            </Card.Body>
          </Card>
        </div>
        <div className='my-3 col-md-6'>
          <Card border="dark">
            <Card.Body>
            <Card.Title>Map</Card.Title>
            <iframe
                src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d112078.30252558457!2d77.14971764913311!3d28.616363612669634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdelhi%20parking%20!5e0!3m2!1sen!2sin!4v1695924470864!5m2!1sen!2sin'
                style={{ width: "100%", height: 400 }}
                title='Map'
              />
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Location;
