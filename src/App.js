import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import View from './view'

class App extends React.Component {


  render() {
    return (

        <Container>
          <View />
        </Container>
    );
  }

}
export default App;
