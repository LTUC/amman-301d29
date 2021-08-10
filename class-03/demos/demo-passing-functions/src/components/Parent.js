import React from 'react';
import ChildCat from './ChildCat';
import sherryImage from './assets/sherry2.jpg'

class Parent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfCannedTuna: 15
        }
    }

    decreaseNumOfTuna = () =>{
        this.setState({
            numberOfCannedTuna: this.state.numberOfCannedTuna -1
        })
    }

    render() {
        return (
            <>
                <h3>Parent Component</h3>
                <h4>Number of canned tuna in home {this.state.numberOfCannedTuna}</h4>
                <ChildCat
                catName='sherry'
                catImage={sherryImage}
                decreaseNumOfTuna = {this.decreaseNumOfTuna}
                
                />
                <ChildCat
                catName='basboos'
                catImage='https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'
                decreaseNumOfTuna = {this.decreaseNumOfTuna}
                />
            </>
        )
    }
}

export default Parent;