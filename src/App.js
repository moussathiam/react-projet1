import React, {Component} from 'react';
import './App.css';
import Mycars from './components/Mycars'


class App extends Component {

  state = {
    titre: 'mon catalogue'
  }

  render(){
    return(
      <div className="App">
        <Mycars titre={ this.state.titre }/>
      </div>
    )
  }

}

export default App;
