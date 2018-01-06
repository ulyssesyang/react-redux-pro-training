import React from 'react';
import Counter from './Counter';

class ControlPanel extends React.Component {
    constructor(props){
        super(props);
        this.onCounterUpdate = this.onCounterUpdate.bind(this);
        this.initValues = [0,10,20];
        const initSum = this.initValues.reduce((a,b)=>a+b,0);
        this.state = {sum: initSum};
    }
    onCounterUpdate(newValue, previousValue){
        const valueChange = newValue - previousValue;
        this.setState({sum: this.state.sum + valueChange});
    }
    render(){
        console.log( 'enter ControlPanel render');
        return (
            <div>
                <Counter onUpdate={this.onCounterUpdate} caption="First" />
                <Counter onUpdate={this.onCounterUpdate} caption="Second" initValue={this.initValues[1]} />
                <Counter onUpdate={this.onCounterUpdate} caption="Third" initValue={this.initValues[2]} />
                <br/>
                <div>Total Count: {this.state.sum}</div>
                <button onClick={()=> this.forceUpdate()}>Reset</button>
            </div>
        );
    }
}

export default ControlPanel