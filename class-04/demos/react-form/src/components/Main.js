import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap/';
import UserDataModal from './UserDataModal';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            height: '',
            likeCats: false,
            breed: '',
            showModal: false
        }
    }

    submitDataForm = async (e) => {
        e.preventDefault();

        await this.setState({
            userName: e.target.userName.value,
            height: e.target.height.value,
            likeCats: e.target.likeCats.checked,
            breed: e.target.breed.value,
            showModal: true
        })


        console.log('ggggggggggggg', this.state);

    }

    handleClose = () => {
        this.setState({
            showModal: false
        })
    }

    render() {
        return (
            <div>
                <h3>Main Form</h3>

                <Form onSubmit={this.submitDataForm}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" name='userName' />
                        <Form.Label>Height</Form.Label>
                        <Form.Control type="text" placeholder="Enter Height" name='height' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Do you like cats?" name='likeCats' />
                    </Form.Group>

                    <Form.Label>what is your fav cat breed?</Form.Label>
                    <Form.Select aria-label="Default select example" name='breed' >
                        <option>Open this select menu</option>
                        <option value="Angora">Angora</option>
                        <option value="Baladi">Baladi</option>
                        <option value="Persian">Persian</option>
                    </Form.Select>


                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                <UserDataModal
                    showModal={this.state.showModal}
                    handleclose={this.handleClose}
                    formData={this.state}
                // userName={this.state.userName}
                // height={this.state.height}
                // likeCat={this.state.likeCat}
                // breed={this.state.breed}

                />
            </div>
        )
    }
}

export default Main;
