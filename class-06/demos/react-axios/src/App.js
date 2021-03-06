import React from 'react';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      searchCity: '',
      showData: false
    }
  }

  getLocation = async (e) => {
    console.log('inside get location function')
    e.preventDefault();

    await this.setState({
      searchCity: e.target.city.value
    })

    console.log('aaaaaaa', this.state.searchCity)
    console.log('rrrrrrrrrrrrr',process.env.REACT_APP_LOCATIONIQ_KEY)
    let locURL = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchCity}&format=json`;

    let resultData = await axios.get(locURL)

    console.log('ssssssssssss', resultData);
    console.log('ssssssssssss', resultData.data);
    console.log('ssssssssssss', resultData.data[0]);

    this.setState({
      cityData: resultData.data[0],
      showData: true
    })

    console.log('aaaaaaaa', this.state.cityData)

  }

  render() {
    return (
      <div>
        <>
          <h2>City Explorer</h2>
          {/* <button onClick={this.getLocation}>Get Amman location</button> */}
          <form onSubmit={this.getLocation}>
            <input type='text' placeholder='Enter city' name='city' />
            <button>submit</button>
          </form>

          {this.state.showData &&
            <p>{this.state.searchCity} Lat:{this.state.cityData.lat} /Lon:{this.state.cityData.lon} </p>
          }


        </>
      </div>
    )
  }
}

export default App;
