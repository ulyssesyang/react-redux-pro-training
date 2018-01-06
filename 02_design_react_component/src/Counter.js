import React from 'react';
import PropTypes from 'prop-types';
const buttonStyle = {
  margin: '10px'
};

class Counter extends React.Component {
    constructor(props){
        super(props);

        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

        this.state = {
            count: props.initValue
        };
    }
    componentWillReceiveProps(nextProps){
        console.log('enter componentWillReceiveProps ' + this.props.caption);
        console.log('enter componentWillReceiveProps ' + nextProps.initValue);
    }
    componentWillMount(){
        console.log('enter componentWillMount ' + this.props.caption);
    }
    componentDidMount(){
        console.log('enter componentDidMount ' + this.props.caption);
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('enter shouldComponentUpdate ' + this.props.caption);
        return (nextProps.caption !== this.props.caption) ||
           (nextState.count !== this.state.count);
    }
    onClickIncrementButton(){
        console.log('onClickIncrementButton');
        this.updateCount(true);
    }
    onClickDecrementButton(){
        console.log('onClickDecrementButton');
        this.updateCount(false);
    }
    updateCount(isIncrement){
        const previousValue = this.state.count;
        const newValue = isIncrement ? previousValue + 1 : previousValue -1;
        this.setState({count: newValue});
        this.props.onUpdate(newValue, previousValue);
    }
    render(){
        console.log('enter render ' + this.props.caption);
        const {caption} = this.props;
        return(
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div>
        );
    }
}

Counter.protoTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number,
    onUpdate: PropTypes.func
};

Counter.defaultProps = {
    initValue: 0,
    onUpdate: f => f
}

export default Counter;