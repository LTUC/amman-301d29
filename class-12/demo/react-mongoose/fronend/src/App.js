import axios from 'axios';
import React from 'react'
import Form from './components/Form'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cats:[]
    }
  }

  // componentDidMount = ()=>{

  // }

  getCats = async (e) => {
    e.preventDefault();

    let ownerName = e.target.catOwner.value;
    console.log(ownerName);

    let catsData = await axios.get(`${process.env.REACT_APP_SERVER}/getCats?ownerName=${ownerName}`)
    this.setState ({
      cats: catsData.data
    })

    console.log(this.state.cats)
  }

  render() {
    return (
      <div>
        <Form
          getCats={this.getCats}
        />
        {/* render the cats data */}
      </div>
    )
  }
}

export default App
