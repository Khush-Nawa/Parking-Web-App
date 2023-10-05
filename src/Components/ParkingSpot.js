import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ParkingSpot = ({ addToCart, list }) => {
  return (
    <section className="container mt-3">
      <h1 className='text-center'>Available Parking</h1>
      <Row className="justify-content-center">
        {list.map((item) => (
          <Col key={item.id} sm={12} md={6} lg={4} xl={3} className="mb-3">
            <Card border="dark">
              <Card.Img variant="top" src={item.img} alt="Image" />
              <Card.Body>
                <Card.Title>Name - {item.title}</Card.Title>
                <Card.Text>Type - {item.type}</Card.Text>
                <Card.Text>Address - {item.location}</Card.Text>
                <Card.Text>Distance - {item.distance}</Card.Text>
                <Card.Subtitle>Price ₹ {item.price} /Hour</Card.Subtitle>
                <Button
                  variant="dark"
                  onClick={() => addToCart(item)} // Pass the item to addToCart
                  as={Link}
                  to="/CartList"
                  className="mt-2">
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <Col sm={12} md={6} lg={4} xl={3} className="mb-3">
        <Card className='my-3' bg="danger">
              <Card.Img variant="top" src='https://www.thenbs.com/-/media/uk/new-images/by-section/knowledge/knowledge-articles-hero/multi-storey-car-park.jpg' alt="Image" />
              <Card.Body>
                <Card.Title>Name - Parking Place 4 </Card.Title>
                <Card.Text>Type - Metro Station Parking</Card.Text>
                <Card.Text>Address - Address 4, Delhi</Card.Text>
                <Card.Text>Distance -  740 m</Card.Text>
                <Card.Subtitle>Price ₹ 80 /Hour</Card.Subtitle>
                <Button disabled
                  variant="dark"
                  className="mt-2">
                  Book Now
                </Button>
              </Card.Body>
            </Card>
            </Col>
      </Row>
    </section>
  );
};

export default ParkingSpot;