import axios from 'axios';
import React from 'react'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokeName: '',
      pokeInfo: {}
    }
  }

  getPokeData = async (e) =>{
    e.preventDefault();
    console.log(e.target.poke.value)
    await this.setState({
      pokeName:e.target.poke.value
    })
    // http://localhost:3001/getDataFromPoke?pokeName=pidgey
    let pokeDataResult = await axios.get(`${process.env.REACT_APP_SERVER_LINK}/getDataFromPoke?pokeName=${this.state.pokeName}`)
    console.log('kkkkkkkkk',pokeDataResult.data)
    await this.setState({
      pokeInfo: pokeDataResult.data
    })
  }

  render() {
    return (
      <div>
        <h2>Pokemon App</h2>
        <form onSubmit={this.getPokeData}>
          <input type="text" name='poke' />
          <button> Get Poke Data</button>
        </form>
        <p>{this.state.pokeInfo.name}</p>
        <p>{this.state.pokeInfo.url}</p>
      </div>
    )
  }
}

export default App
