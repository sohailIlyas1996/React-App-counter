import React, { Component } from "react";
class Counter extends Component {
  renderHElper() {
    return this.state.tags.length === 0 ? (
      "there are no tags"
    ) : (
      <ul>
        {this.state.tags.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  HandlerIncrement = (product) => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  componentDidUpdate(prevProps,preState){
    // if(prevProps.counters.map(value=>value.value!==this.props.counters.map(value=>value.value))){
    //   console.log('call ajax')
    // }
    
    }
    componentWillUnmount(){
      console.log('component deleted');
    }
  render() {
    console.log('render-counter')
    return (
      <div>
        {this.props.children}
        <span style={{ fontSize: 30 }} className={this.getBadgeColor()}>
          {this.formatCount()}
        </span>
        {/* {this.state.tags.length===0 && 'please create new list'}
   {this.renderHElper()} */}
        <button onClick={() => this.props.onIncrement(this.props.counter)}>
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeColor() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;

    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
