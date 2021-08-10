import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import {Card,Button} from 'react-bootstrap/';

class ChildCat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfPets: 0,
            numberOfTakenTuna: 0
        }
    }

    increaseNuOfPets = () => {
        console.log(this);

        this.setState({
            numberOfPets: this.state.numberOfPets + 1
        })
    }

    giveMeTuna = () =>{
        this.increaseNumberOfTakenTuna();
        this.props.decreaseNumOfTuna();
    }

    increaseNumberOfTakenTuna = () =>{
        this.setState({
            numberOfTakenTuna: this.state.numberOfTakenTuna+1
        })
    }

    render() {
        console.log()
        return (
            <>
                {/* <p>{this.props.catName}</p>
                <img onClick={this.increaseNuOfPets} src={this.props.catImage} alt='' />
                <p>Number of Pets = {this.state.numberOfPets}</p> */}

                <Card style={{ width: '18rem' }}>
                    <Card.Img onClick={this.increaseNuOfPets} variant="top" src={this.props.catImage} />
                    <Card.Body>
                        <Card.Title>{this.props.catName}</Card.Title>
                        <Card.Text>
                        🐱 Number of Pets = {this.state.numberOfPets}
                        </Card.Text>
                        <Card.Text>
                        😻 Number of Taken Tuna = {this.state.numberOfTakenTuna}
                        </Card.Text>
                        <Button onClick={this.giveMeTuna} variant="primary">Meow</Button>
                    </Card.Body>
                </Card>

            </>
        )
    }
}

export default ChildCat;