import React, { Component } from 'react'
import Table from './Table'

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React 8!</h1>
      </div>
    )
  }
}
*/

class App extends Component {
   state = {
    characters : [
      {
        name: 'Fabio',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ],
  }
  
  removeCharacter = index => {
  const { characters } = this.state

  this.setState({
    characters: characters.filter((character, i) => {
      return i !== index
    }),
  })
}
   
  render() {
    const { characters } = this.state
    
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
      </div>
    )
  }
}


export default App