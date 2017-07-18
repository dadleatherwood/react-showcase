import React, {Component} from 'react'

class FilterString extends Component {
  constructor() {
    super()
    this.state = {
      unFilteredArray: ['Jacob', 'Courtney', 'Charlie', 'Lucy'],
      userInput: '',
      filteredArray: []
    }
    this.updateUserInput = this.updateUserInput.bind(this)
    this.filterString = this.filterString.bind(this)
  }

  //methods
  updateUserInput(e) {
    this.setState({userInput: e.target.value})
  }

  filterString() {
    const {userInput} = this.state
    const names = this.state.unFilteredArray
    let filteredArray = []
    for (var i = 0; i < names.length; i++) {
      if (names[i].includes(userInput)) {
        filteredArray.push(names[i])
      }
    }
    this.setState({filteredArray : filteredArray})
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">Names: {JSON.stringify(this.state.unFilteredArray)}</span>
        <input className="inputLine"
          onChange={this.updateUserInput}/>
        <button className="confirmationButton"
          onClick={this.filterString}>Filter</button>
        <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}

export default FilterString
