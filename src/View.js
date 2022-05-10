import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import './App.css';

function View(){
    const [todos, changeTodos] = useState( [{ id: 1, task: "make static data", complete: false },
    { id: 2, task: "make dynamic data", complete: false }])


  const buildRows = () =>  {
    return todos.map((current) => (
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
