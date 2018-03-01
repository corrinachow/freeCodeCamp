import React from 'react';
//import ReactDOM from 'react-dom';

class IntervalSettings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      workInterval: 25,
      restInterval: 5,
    }

    /*this.workChange = this.workChange.bind(this);
    this.restChange = this.restChange.bind(this);*/
    this.workIncrease = this.workIncrease.bind(this);
    this.workDecrease = this.workDecrease.bind(this);
    this.restIncrease = this.restIncrease.bind(this);
    this.restDecrease = this.restDecrease.bind(this);
  }

/*  workChange(input) {
    //console.log(workInterval)
    this.setState({workInterval: input.target.value})
  }

  restChange(input) {
    this.setState({restInterval: input.target.value})
  }*/

  workIncrease() {
    const {workInterval} = this.state;
    this.setState({workInterval: workInterval + 1})
  }

  workDecrease() {
    const {workInterval} = this.state;
    this.setState({workInterval: workInterval - 1})
  }

  restIncrease() {
    const {restInterval} = this.state;
    this.setState(restInterval == 60 ? {restInterval} : {restInterval: restInterval + 1})
    this.setState({restInterval: restInterval + 1})
  }

  restDecrease() {
    const {restInterval} = this.state;
    this.setState(restInterval == 1 ? {restInterval} : {restInterval: restInterval - 1})
  }




  render() {
    return (
      <div className="interval-settings">
      <div className="work-interval">
        <button onClick={this.workIncrease}>^</button>
        <input type="number" value={this.state.workInterval} onChange={this.workChange}></input>
        <button onClick={this.workDecrease}>v</button>
      </div>
      <div className="rest-interval">
        <button onClick={this.restIncrease}>^</button>
        <input type="number" value={this.state.restInterval} onChange={this.restChange}></input>
        <button onClick={this.restDecrease}>v</button>
      </div>
      </div>
      );
  }

}

export default IntervalSettings;