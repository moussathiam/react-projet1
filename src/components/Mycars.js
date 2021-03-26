import React, { Component } from "react";
import Car from './Cars'

class Mycars extends Component {

    /*
    noCopy = () => {
        alert("merci de ne pas vcopier le text");
    }
    addStyle = (e) => {
        if(e.target.classList.contains('styled')){
            e.target.classList.remove('styled');
        }else{
            e.target.classList.add('styled');
        }
    }
    */

    state = {
        voitures : [
            {'marque': 'PIAGIAO2', 'color': 'Yellow', 'year': 2000},
            {'marque': 'NISSAN', 'color': 'green', 'year': 2004},
            {'marque': 'RANGE ROVER', 'color': 'blue', 'year': 2010}
        ]
    }

    addTenYear = () => {
        const udatedState = this.state.voitures.map( (param) => {
            param.year -= 10;
        })
        console.log(udatedState);
        this.setState(
            udatedState
        )
    }

    render(){
        const year = new Date().getFullYear();
        return(
            <div>
                <h1>{ this.props.titre }</h1>
                <button onClick={ this.addTenYear }>Ajouter 10 ans</button>
                {
                    this.state.voitures.map((voiture, index) => {
                       return <Car key={ index } color={ voiture.color } year={ year - voiture.year }>{ voiture.marque }</Car>
                    })
                }
            </div>
        )
    }
}

export default Mycars;