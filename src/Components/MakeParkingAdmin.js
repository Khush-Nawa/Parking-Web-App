import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import Card from 'react-bootstrap/Card';
function GridComplexExample() {
    return (

        <div className='m-3 d-flex justify-content-center'>
            <Card border="dark">
                <Card.Body>
                    <Card.Title className='m-3 text-center'>Make Parking Admin Form</Card.Title>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter First Name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Name" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Row>
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Attach Supporting Document</Form.Label>
                            <Form.Control type="file" multiple />
                        </Form.Group>                            
                            <Form.Group as={Col} id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Confirm" />
                            </Form.Group>                        
                    </Form>
                </Card.Body>
                <Card.Footer>
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg" type="submit">
                            Submit Form
                        </Button>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default GridComplexExample;