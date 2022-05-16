import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import View from './View'
import Add from './Add';

function App(props){
  const [todos, changeTodos] = useState( [
    { id: 1, task: "make static data", complete: false },
    { id: 2, task: "make dynamic data", complete: false }
  ])
  const updateTodoItems = (id,description,complete) => {
     const item ={id, task: description, complete};
     changeTodos((state)=> [...state, item]);
  }

    return (
        <Container>
          <View todos={todos} />
          <Add onSubmit={(id,description,complete) =>
          updateTodoItems(id,description,complete)}/>
        </Container>
    );

}
export default App;
