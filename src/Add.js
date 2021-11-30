import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Add(){

  const submitHandler = (e) => {
    console.log("submit")
  }

return(
  <div className="container">
    <Form onSubmit={(e) => submitHandler(e)}>
      <Form.Group controlId="taskID">
        <Form.Label>Task ID</Form.Label>
        <Form.Control name="id" type="number" />
      </Form.Group>

      <Form.Group controlId="taskDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control name="description" type="text" />
      </Form.Group>

      <Form.Group controlId="complete">
        <Form.Label>Complete?</Form.Label>
        <Form.Control name="completed" type="checkbox" />
      </Form.Group>

      <Button variant="primary" type="submit"> 
        Submit
      </Button>

    </Form>
  </div>
);
}

export default Add;