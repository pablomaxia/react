import React from 'react';

export default ({
    value = 0,
    increment = () => null,
    decrement = () => null,
    reset = () => null,
}) => (
    <div class="container-counter">
        <section class="counter">
            <span>{value}</span>
        </section>
        <section class="buttons">
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Descrement</button>
            <button onClick={reset}>Reset</button>
        </section>
    </div>
);


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