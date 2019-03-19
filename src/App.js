import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

const name = 'Pat'
const heading = 'Welcome ' + name

class App extends Component {
    state = {
        characters: []
    }

    removeCharacter = index => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })
    }

    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] })
    }

    render() {
        const { characters } = this.state
        const headers = ['Name', 'Job', 'Remove']
        // console.log({headers})

        return (
            <div className="container"> 
                <h1>Hello React, {heading}</h1>
                <Table headerData={headers} characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App