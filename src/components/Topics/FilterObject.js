import React, {Component} from 'react'

class FilterObject extends Component {

  constructor() {
    super()
    this.state = {
      unFilteredArray: [
        {
          name: 'Jacob Leatherwood',
          age: 36,
          hairColor: 'blue'
        },
        {
          name: 'Courtney Leatherwood',
          age: 34,
          shoeColor: 'purple'
        },
        {
          name: 'Charlie Leatherwood',
          age: 8,
          favoriteColor: 'red'
        },
        {
          name: 'Lucy Leatherwood',
          age: 6,
          favoriteColor: 'pink'
        }
      ],
      userInput: "",
      filteredArray: []
    }
    this.updateUserInput = this.updateUserInput.bind(this)
    this.filterFamily = this.filterFamily.bind(this)
  }

  //methods
  updateUserInput(e) {
    this.setState({userInput: e.target.value})
  }

  filterFamily() {
    const {userInput} = this.state
    var filteredFamilyMembers = []
    for (var i = 0; i < this.state.unFilteredArray.length; i++){
      if (this.state.unFilteredArray[i].hasOwnProperty(userInput)) {
        filteredFamilyMembers.push(this.state.unFilteredArray[i])
      }
    }
    this.setState({filteredArray: filteredFamilyMembers})
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray)}</span>
        <input className="inputLine"
          onChange={this.updateUserInput}
          placeholder="What would you like to filter by?" />
        <button className="confirmationButton"
          onClick={this.filterFamily}>Filter</button>
        <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
      </div>

    )
  }
}

export default FilterObject
