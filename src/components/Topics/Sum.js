import React, {Component} from 'react'

class Sum extends Component {
  constructor() {
    super()
    this.state = {
      number1 : 0,
      number2 : 0,
      sum : null
    }
    this.updateNumber1 = this.updateNumber1.bind(this)
    this.updateNumber2 = this.updateNumber2.bind(this)
    this.calculateSum = this.calculateSum.bind(this)
  }

  //methods
  updateNumber1(e) {
    this.setState({number1 : parseInt(e.target.value)})
  }

  updateNumber2(e) {
    this.setState({number2 : parseInt(e.target.value)})
  }

  calculateSum() {
    const {number1} = this.state
    const {number2} = this.state
    this.setState({sum : number1 + number2})
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine"
          onChange={this.updateNumber1} />
          <input className="inputLine"
            onChange={this.updateNumber2} />
        <button className="confirmationButton"
          onClick={this.calculateSum}>Add</button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>

    )
  }
}

export default Sum
