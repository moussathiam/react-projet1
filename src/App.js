import React, {Component} from 'react';
import './App.css';
import Mycars from './components/Mycars';
import Form from './components/Form';


class App extends Component {

  state = {
    titre: 'mon catalogue'
  }

  render(){
    return(
      <div className="App">
        <Form titre={ this.state.titre }/>
      </div>
    )
  }

}

export default App;
