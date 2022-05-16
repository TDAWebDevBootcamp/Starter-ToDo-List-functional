import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Add(props) {
  const [formValues, changeFormValues] = useState({
    id: 0,
    description: "",
    completed: false,
  });

  const handleIdChange = (event) => {
    const newState = { ...formValues };
    newState.id = event.target.value;
    changeFormValues(newState);
  };

  const handleDescriptionChange = (event) => {
    const newState = { ...formValues };
    newState.description = event.target.value;
    changeFormValues(newState);
  };
  const handleCompletedChange = (event) => {
    const newState = { ...formValues };
    newState.completed = !formValues.completed;
    changeFormValues(newState);
  };
  /*
  const handleChange= (event) =>{
    const newState={...formValues};
    if (event.target.name === "completed"){
      newState[event.target.name] = !formValues.completed;
    } else{
      newState[event.target.name] =event.target.value;
    }
    console.log(newState)
  changeFormValues(
    newState
  )}
  */
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formValues);
    props.onSubmit(formValues.id, formValues.description, formValues.completed);
    changeFormValues({
      id: 0,
      description: "",
      completed: false,
    });

    //need to reset the fields to default
 
    event.target.elements["id"].value = "";
    event.target.elements['description'].value = "";
    event.target.elements['completed'].checked = false;

    //document.getElementByName('description').value = "";
  };

  return (
    <div>
      <Form onSubmit={(event) => submitHandler(event)}>
        <Form.Group controlId="taskID">
          <Form.Label> Task ID</Form.Label>
          <Form.Control
            name="id"
            type="number"
            onChange={(event) => handleIdChange(event)}
          />
        </Form.Group>

        <Form.Group controlId="taskDescription">
          <Form.Label> Description</Form.Label>
          <Form.Control
            name="description"
            type="text"
            onChange={(event) => handleDescriptionChange(event)}
          />
        </Form.Group>

        <Form.Group controlId="completed">
          <Form.Check
            type="checkbox"
            name="completed"
            label="Completed?"
            onChange={(event) => handleCompletedChange(event)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Add;
