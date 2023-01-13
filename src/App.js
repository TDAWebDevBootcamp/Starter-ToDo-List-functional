import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import View from './View'
import Add from './Add';

function App(){

    return (
        <Container>
          <View />
          <Add />
        </Container>
    );

}
export default App;
