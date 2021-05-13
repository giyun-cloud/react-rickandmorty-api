import axios from 'axios'
import { Component } from 'react'
import Character from './Character'
import './App.css'

class App extends Component {
  state = {
    characters: [],
    isLoading: true,
    count: 1,
  }

  printAddress = async () => {
    const data = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${this.state.count}`,
    )
    this.setState({
      characters: data.data.results,
      isLoading: false,
    })
  }

  componentDidMount() {
    this.printAddress()
  }
  componentDidUpdate() {
    this.printAddress()
  }

  onPlus = () => {
    if (this.state.count < 34) {
      this.setState((cur) => ({ count: cur.count + 1 }))
    } else {
      this.setState((cur) => ({ count: 1 }))
    }
    this.setState({ isLoading: true, characters: [] })
  }

  onMinus = () => {
    if (this.state.count >= 2) {
      this.setState((cur) => ({ count: cur.count - 1 }))
    } else {
      this.setState((cur) => ({ count: 34 }))
    }
    this.setState({ isLoading: true, characters: [] })
  }

  render() {
    const { isLoading, characters, count } = this.state
    console.log(characters)
    return (
      <section>
        <div className="btn-group">
          <button onClick={this.onMinus}>prev</button>
          <span>{count}-page</span>
          <button onClick={this.onPlus}>next</button>
        </div>

        <div className="container">
          {isLoading
            ? 'Loading...'
            : characters.map((character) => (
                <Character
                  key={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  type={character.type}
                  gender={character.gender}
                  picture={character.image}
                />
              ))}
        </div>

        <div className="btn-group">
          <button onClick={this.onMinus}>prev</button>
          <span>{count}-page</span>
          <button onClick={this.onPlus}>next</button>
        </div>
      </section>
    )
  }
}

export default App
