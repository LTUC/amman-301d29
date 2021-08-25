import axios from 'axios';
import React from 'react';
import Form from './components/Form';
import Cat from './components/Cat';
import AddCatForm from './components/AddCatForm';
import UpdateCatForm from './components/UpdateCatForm';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      showCatsComponent: false,
      ownerCatName: '',
      selectedCat: {},
      showUpdateForm: false,
      // selectedCatID: ''
    }
  }

  // componentDidMount = ()=>{

  // }

  getCats = async (e) => {
    e.preventDefault();

    let ownerName = e.target.catOwner.value;
    console.log(ownerName);

    await this.setState({
      ownerCatName: ownerName
    })

    // let catsData = await axios.get(`${process.env.REACT_APP_SERVER}/getCats?ownerName=${ownerName}`);
    let userInfo = {
      ownerName: ownerName
    }
    let catsData = await axios.get(`${process.env.REACT_APP_SERVER}/getCats`, { params: userInfo })
    this.setState({
      cats: catsData.data,
      showCatsComponent: true
    })

    console.log(this.state.cats)
  }

  addCat = async (e) => {
    e.preventDefault();
    // console.log('alive')

    // let catName= e.target.catName.value;
    // let catBreed= e.target.catBreed.value;

    let catInfo = {
      catName: e.target.catName.value,
      catBreed: e.target.catBreed.value,
      ownerName: this.state.ownerCatName
    }

    // let catInfoData = await axios.get(`${process.env.REACT_APP_SERVER}/addCat`,{params:catInfo})
    let catInfoData = await axios.post(`${process.env.REACT_APP_SERVER}/addCat`, catInfo)
    this.setState({
      cats: catInfoData.data
    })

  }

  deleteCat = async (catID) => {
    // let catsInfo = await axios.delete(`${process.env.REACT_APP_SERVER}/deleteCat?catID=${catID}`)
    let catsInfo = await axios.delete(`${process.env.REACT_APP_SERVER}/deleteCat/${catID}?ownerName=${this.state.ownerCatName}`)

    this.setState({
      cats: catsInfo.data
    })
  }

  updateCat = async (catID) => {

    await this.setState({
      showUpdateForm: false
    })

    let chosenCat = this.state.cats.find(cat => {
      // if(cat._id == catID) return cat;
      return cat._id === catID
    })
    // console.log({chosenCat})
    // console.log('chosenCat',chosenCat)
    this.setState({
      selectedCat: chosenCat,
      showUpdateForm: true,
      // selectedCatID: catID
    })
  }

  updateCatInfo = async (e) => {
    e.preventDefault();
    let catData = {
      catName: e.target.catName.value,
      catBreed: e.target.catBreed.value,
      ownerName: this.state.ownerCatName
    }

    let catID = this.state.selectedCat._id;
    let catsData = await axios.put(`${process.env.REACT_APP_SERVER}/updateCat/${catID}`, catData);
    this.setState({
      cats: catsData.data
    })
  }

  render() {
    return (
      <div>
        <Form
          getCats={this.getCats}
        />

        {/* render the cats data */}
        {this.state.showCatsComponent &&
          this.state.cats.map((cat, idx) => {

            return (
              <Cat
                cat={cat}
                idx={idx}
                deleteCat={this.deleteCat}
                updateCat={this.updateCat}
              />
            )
          })
        }

        <AddCatForm
          addCat={this.addCat} />

        {this.state.showUpdateForm &&
          <UpdateCatForm
            catInfo={this.state.selectedCat}
            updateCatInfo={this.updateCatInfo}
          />
        }


      </div>
    )
  }
}

export default App
