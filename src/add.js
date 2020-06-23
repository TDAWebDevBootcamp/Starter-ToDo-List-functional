import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'

class Add extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      description: "",
      completed: false
    }
    toastr.options = {
      closeButton: true,
      debug: false,
      extendedTimeOut: "1000",
      hideDuration: "1000",
      hideEasing: "linear",
      hideMethod: "fadeOut",
      newestOnTop: false,
      onclick: null,
      positionClass: "toast-top-full-width",
      preventDuplicates: true,
      progressBar: true,
      showDuration: "300",
      showEasing: "swing",
      showMethod: "fadeIn",
      timeOut: "5000",
    };
    toastr.clear();
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value
    this.setState(newState)
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.onsubmit(this.state.id, this.state.description, this.state.completed);
    toastr.success("Item added");
    this.setState({
      id: 0,
      description: "",
      completed: false
    })
  }

  render() {
    return (
      <>
        <Form onSubmit={(e) => this.submitHandler(e)} >
          <Form.Group controlId="taskID">
            <Form.Label>Task ID</Form.Label>
            <Form.Control name="id" type="number" value={this.state.id} onChange={(e) => this.handleChange(e)} />
          </Form.Group>

          <Form.Group controlId="taskDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control name="description" type="text" value={this.state.description} placeholder="Description" onChange={(e) => this.handleChange(e)} />
          </Form.Group>
          <Form.Group controlId="complete">
            <Form.Check name="completed" type="checkbox" checked={this.state.completed} label="Comlete" onChange={(e) => this.handleChange(e)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
  </Button>
        </Form>
      </>
    );
  }

}
export default Add;
