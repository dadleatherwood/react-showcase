import React, {Component} from 'react'

class EvenAndOdd extends Component {

  constructor() {
    super()
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: "",
    }
    this.updateUserInput = this.updateUserInput.bind(this)
    this.sortEvenAndOdd = this.sortEvenAndOdd.bind(this)
  }

  //methods
  updateUserInput(e) {
    this.setState({userInput: e.target.value})
  }

  sortEvenAndOdd() {
    const {userInput} = this.state
    const numbers = userInput.split(",")
    const evens = []
    const odds = []
    for (var i = 0; i < numbers.length; i++) {
      let num = parseInt(numbers[i])
      if (num % 2 === 0 ) {
        evens.push(num)
      } else if (num % 2 !== 0) {
        odds.push(num)
      }
    }
    console.log(evens, odds)
    this.setState({evenArray: evens, oddArray: odds})
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine"
          onChange={this.updateUserInput}
          placeholder="Type a series of numbers"/>
        <button className="confirmationButton"
          onClick={this.sortEvenAndOdd}>Split</button>
        <span className="resultsBox">
          Evens: { JSON.stringify(this.state.evenArray) }
        </span>
        <span className="resultsBox">
          Odds: { JSON.stringify(this.state.oddArray) }
        </span>
      </div>

    )
  }
}

export default EvenAndOdd
