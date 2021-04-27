import React, { Component } from 'react'

class LifeCycle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'toto',
             step: 1
        }
        console.log('constructeur ' + this.state.step);
    }

    componentDidMount() {
        console.log('componentDidMount ' + this.state.step);
        this.setState({
            step: this.state.step + 1
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate ' + this.state.step);
    }
    
    componentWillUnmount() {
        console.log('componentWillUnmount ' + this.state.step);
    }
    
    
    render() {
        console.log('render ' + this.state.step);
        return (
            <div className="border2">
                { console.log('dom ' + this.state.step) }
                moussa test
            </div>
        )
    }

}

export default LifeCycle
