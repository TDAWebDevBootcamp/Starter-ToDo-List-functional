import React from 'react';
import Table from 'react-bootstrap/Table';
import './App.css';

class View extends React.Component {
  constructor(props) {
    super(props)
    // moved to state in app.js this.todos = [{ id: 1, task: "make static data", complete: false },
    // { id: 2, task: "make dynamic data", complete: false }]
  }

  buildRows() {
    return this.props.todos.map((current) => (
      <tr key={current.id}>
        <td>
          {current.id}
        </td>
        <td>
          {current.task}
        </td>
        <td>
          {current.complete ? "yes" : "no"}
        </td>
      </tr>
    )
    )
  }

  render() {
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>complete</th>

            </tr>
          </thead>
          <tbody>
            {this.buildRows()}
          </tbody>
        </Table>
      </>
    );
  }

}
export default View;
