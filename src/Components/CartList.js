import React, { useState, useEffect } from 'react';
import { Card, Button, Modal, Form, Container, Row, Col, Alert } from 'react-bootstrap';

function CartList({ Cart }) {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    setCart(Cart);
  }, [Cart]);

  const decreaseQuantity = (cartIndex) => {
    const updatedCart = cart.map((item, index) =>
      cartIndex === index
        ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
        : item
    );
    setCart(updatedCart);
  };

  const increaseQuantity = (cartIndex) => {
    const updatedCart = cart.map((item, index) =>
      cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const deleteItem = (cartIndex) => {
    const updatedCart = cart.filter((_, index) => index !== cartIndex);
    setCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
    setShow(false);
  };

  return (
    <Container className="my-3">
      <Row>
        {cart.map((cartItem, cartIndex) => (
          <Col key={cartIndex} sm={12} md={6} lg={4} xl={3}>
            <Card className="mb-3">
              <Card.Img src={cartItem.img} alt="cart-item" style={{ width: '100%' }} />
              <Card.Body>
                <Card.Title>{cartItem.title}</Card.Title>
                <Button variant="dark" onClick={() => decreaseQuantity(cartIndex)}>-</Button>
                <span className="mx-2"><strong>{cartItem.quantity}</strong></span>
                <Button variant="dark" onClick={() => increaseQuantity(cartIndex)}>+</Button>
                <div><strong> ₹ {cartItem.price}/Hour</strong></div>
                <Button
                  variant="danger"
                  onClick={() => deleteItem(cartIndex)}
                  className="mt-2"
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <Card.Subtitle style={{ fontSize: '30px' }}>
            Total: ₹ {calculateTotalPrice()}/-
          </Card.Subtitle>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="success" onClick={() => setShow(true)}>Proceed To Pay</Button>
        </Col>
      </Row>
      {paymentSuccess && (
        <Alert variant="success" className='mt-3' onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Payment is Successful!</Alert.Heading>
            <hr />
          <p>Token No is 3186</p>
        </Alert>
      )}
      <Modal show={show} onHide={handleClose}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Payment Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="number" placeholder="1234 5678 9012 3457" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Candidate Name</Form.Label>
              <Form.Control type="text" placeholder="Cardholder's Name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control type="text" placeholder="MM/YYYY" />
            </Form.Group>
            <Form.Group>
              <Form.Label>CVV</Form.Label>
              <Form.Control type="password" placeholder="●●●" minLength={3} maxLength={3} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={handleClose}>Close</Button>
            <Button variant="success" onClick={handlePaymentSuccess}>Pay Now</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
}

export default CartList;
