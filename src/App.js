import React, {Component} from 'react';
import './App.css';
import Mycars from './components/Mycars';
import Form from './components/Form';
import LifeCycle from './components/LifeCycle'

class App extends Component {

  state = {
    titre: 'mon catalogue',
    show: true
  }

  show = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render(){
    const livCycle = this.state.show ? (<LifeCycle />) : (<div>Vide...</div>);
    return(
      <div className="App">
        {/* <Mycars titre={ this.state.titre }/> */}
        {/* <Form /> */}
        { livCycle }
        <button onClick={this.show}>Cacher</button>
      </div>
    )
  }

}

export default App;
