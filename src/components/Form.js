import React, { Component } from 'react';
import ImgCar from './ImgCar';
import styles from './myCss.module.css';
import 'bootstrap/dist/css/bootstrap.css'
class Form extends Component {

    state = {
        fond: 'red',
        couleur: 'yellow',
        couleurs: ['green', 'blue', 'orange', 'yellow'],
        comment: '',
        userName: 'moussa thiam'
    }

    handleUserName = e => {
        this.setState({
            userName: e.target.value
        });
    }

    changeColor = (couleur, fond) => {
        this.setState({
            fond: fond,
            couleur: couleur
        })
    }

    handleColor = e => {
        this.setState({
            couleur: e.target.value
        })
    }

    handleComment = e => {
        this.setState({
            comment: e.target.value
        })
    }

    render() {
        return (
            <div>
                <button className="btn btn-success m-1" onClick={() => this.changeColor('black', 'white')}>Noire</button>
                <button className="btn btn-danger m-1" onClick={() => this.changeColor('white', 'black')}>Blue</button>
                <button className="btn btn-warning m-1" onClick={() => this.changeColor('green', 'red')}>Vert</button>
                <div >
                    <ImgCar color={this.state.couleur} fond={this.state.fond} />
                </div>


                <form>
                    <div>
                        <h1>Formulaire {this.state.userName != '' ? 'de ' : ''}{this.state.userName}</h1>
                        <label>pseudo</label>
                        <input className="form form-group" type="text" value={this.state.userName} onChange={this.handleUserName} />
                    </div>
                    <div>
                        <select className="form form-group" value={this.state.couleur} onChange={this.handleColor}>
                            {
                                this.state.couleurs.map((color, index) => {
                                    return <option key={index} value={color}>{color}</option>
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <p className={styles.rouge}>{this.state.comment}</p>
                        <textarea value={this.state.comment} onChange={this.handleComment}></textarea>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;