import React from 'react';
import Counter from '../components/counter';
import Storage from '../libs/storage';

const vault = Storage({ name: 'counter' });

export default class extends React.Component {
    constructor(props) {
        super(props);
        const initialState = vault.get();

        this.state = initialState ? initialState : { count: 0 };
    }

    increment() {
        console.log('Before', this.state);
        this.setState(state => ({ count: state.count + 1 }), () => {
            vault.save(this.state);
        });
    }

    decrement() {
        this.setState(state => ({ count: state.count - 1 }), () => {
            vault.save(this.state);
        });
    }

    reset() {
        this.setState({ count: 0 }, () => vault.save(this.state));
    }

    render() {
        return (
            <div class="container-counter">
            <section class="counter">
                <span>{this.state.count}</span>
            </section>
            <section class="buttons">
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
            </section>
        </div>
    )
    }
};

/*
export default class Counter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };

        this.increment =  this.increment.bind(this);
        this.decrement =  this.decrement.bind(this);
        this.reset =  this.reset.bind(this);
    }

    increment() {
    // Caso inicial, muestra el estado anterior
     
        this.setState({ count: this.state.count + 1 });
        console.log(this.state); 

    // Solución, usar un callback:    
     
        this.setState({ count: this.state.count + 1 }, () => {
            console.log(this.state); 
        });

    }
     
    decrement() {
        this.setState({ count: this.state.count - 1 });
    }

    reset() {
        this.setState({ count: 0 });
    }


    render(){
    return(
        <div class="container-counter">
            <section class="counter">
                <span>{this.state.count}</span>
            </section>
            <section class="buttons">
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
            </section>
        </div>
        )
    }
  }
*/