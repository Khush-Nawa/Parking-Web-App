import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import car from '../images/car.png';
import { Link } from 'react-router-dom';
// import '../Components/Style.css';

function Home() {
  const [records, setRecords] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

  // Function to edit a record by index
  const handleEdit = (index) => {
    setEditIndex(index);
    setShowEditModal(true);
  };

  // Function to handle editing and update the record
  const handleSaveEdit = (editedRecord) => {
    const updatedRecords = [...records];
    updatedRecords[editIndex] = editedRecord;
    setRecords(updatedRecords);
    setShowEditModal(false);
  };

  // Function to delete a record by index
  const handleDelete = (index) => {
    const updatedRecords = [...records];
    updatedRecords.splice(index, 1);
    setRecords(updatedRecords);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const ownerName = event.target.elements.ownerName.value;
    const vehicleName = event.target.elements.vehicleName.value;
    const vehicleNumber = event.target.elements.vehicleNumber.value;
    const entryDate = event.target.elements.entryDate.value;
    const exitDate = event.target.elements.exitDate.value;

    // Add the new record to the existing records
    setRecords([
      ...records,
      {
        ownerName,
        vehicleName,
        vehicleNumber,
        entryDate,
        exitDate,
      }
    ]);
    // Clear the form
    event.target.reset();
  };
  return (
    <div className='container mt-4'>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h2 className="register text-center mb-4">Registration Form</h2>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text>Owner Name:</InputGroup.Text>
              <Form.Control aria-label="Owner name" name="ownerName" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Vehicle Name:</InputGroup.Text>
              <Form.Control aria-label="Vehicle name" name="vehicleName" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Vehicle Number:</InputGroup.Text>
              <Form.Control aria-label="Vehicle number" name="vehicleNumber" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Entry Date</InputGroup.Text>
              <Form.Control type='datetime-local' aria-label="Entry Date" name="entryDate" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Exit Date</InputGroup.Text>
              <Form.Control type='datetime-local' aria-label="Entry Date" name="exitDate" />
            </InputGroup>
            <Button variant="success" type="submit">
              Save
            </Button>
            <Button className='m-2' as={Link} to="/Location" variant="success">
              Submit
            </Button>
          </Form>
        </div>
        <div className="col-md-6">
          <div id="car">
            <h2 className="text-center">Parking Space Information</h2>
            <h3 className="text-center">Total space :- <span id="totalSpace">50</span> </h3>
            <h3 className="text-center">Parking Booked space :- <span id="bookedSpace">0</span> </h3>
            <h3 className="text-center">Total Available space :- <span id="availableSpace">50</span></h3>
          </div>
          <img src={car} className="car img-fluid" alt='Car' />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-12">
          <h2 className="register1 text-center mb-4">All Vehicle Entry Records</h2>
          <div className="table-responsive">
            <Table striped bordered hover variant="secondary">
              <thead>
                <tr>
                  <th>Owner Name</th>
                  <th>Vehicle Name</th>
                  <th>Vehicle Number</th>
                  <th>Entry Date</th>
                  <th>Exit Date</th>
                  <th>Update Record</th>
                  <th>Delete Record</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record, index) => (
                  <tr key={index}>
                    <td>{record.ownerName}</td>
                    <td>{record.vehicleName}</td>
                    <td>{record.vehicleNumber}</td>
                    <td>{record.entryDate}</td>
                    <td>{record.exitDate}</td>
                    <td>
                      <Button variant="warning" onClick={() => handleEdit(index)}>
                        Edit
                      </Button>
                    </td>
                    <td>
                      <Button variant="danger" onClick={() => handleDelete(index)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Create a form within the modal for editing the record */}
          <Form onSubmit={(event) => {
            event.preventDefault();
            // Collect the edited data and pass it to handleSaveEdit
            const editedRecord = {
              ownerName: event.target.elements.ownerName.value,
              vehicleName: event.target.elements.vehicleName.value,
              vehicleNumber: event.target.elements.vehicleNumber.value,
              entryDate: event.target.elements.entryDate.value,
              exitDate: event.target.elements.exitDate.value,
            };
            handleSaveEdit(editedRecord);
          }}>
            {/* ... Form input fields for editing */}
            <InputGroup className="mb-3">
              <InputGroup.Text>Owner Name:</InputGroup.Text>
              <Form.Control aria-label="Owner name" name="ownerName" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Vehicle Name:</InputGroup.Text>
              <Form.Control aria-label="Vehicle name" name="vehicleName" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Vehicle Number:</InputGroup.Text>
              <Form.Control aria-label="Vehicle number" name="vehicleNumber" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Entry Date</InputGroup.Text>
              <Form.Control type='datetime-local' aria-label="Entry Date" name="entryDate" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Exit Date</InputGroup.Text>
              <Form.Control type='datetime-local' aria-label="Entry Date" name="exitDate" />
            </InputGroup>
            <hr />
            <div className='d-flex justify-content-end'>
              <Button variant="success" type="submit">
                Save Changes
              </Button>
              {/* <Button className='ms-3' variant="info" onClick={() => setShowEditModal(false)}>
                Close
              </Button> */}
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default Home;
