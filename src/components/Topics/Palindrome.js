import React, {Component} from 'react'

class Palindrome extends Component {
  constructor(){
    super()
    this.state = {
      userInput : '',
      palindrome: ''
    }
    this.updateUserInput = this.updateUserInput.bind(this)
    this.findPalindrome = this.findPalindrome.bind(this)
  }


//methods
updateUserInput(e) {
  this.setState({userInput: e.target.value})
}

findPalindrome() {
  const {userInput} = this.state
  let forward = userInput
  let backward = userInput.split('').reverse().join('')
  if (forward === backward) {
    this.setState({palindrome : 'true'})
  } else {
    this.setState({palindrome : 'false'})
  }
}
  render() {
    return(
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine"
          onChange={this.updateUserInput}
          placeholder="Which word?" />
        <button className="confirmationButton"
          onClick={this.findPalindrome}>Check</button>
        <span className="resultsBox filterObjectRB">Palindrome: {this.state.palindrome}</span>
      </div>



    )
  }
}

export default Palindrome
