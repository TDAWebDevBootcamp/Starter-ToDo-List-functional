import React from 'react';
import Table from 'react-bootstrap/Table';
import './App.css';

function View(props){

  const buildRows = () =>  {
    return props.todos.map((current) => (
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
            {buildRows()}
          </tbody>
        </Table>
      </>
    );

}
export default View;
