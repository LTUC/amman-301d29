import React from 'react';
// import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Modal } from 'react-bootstrap';

class UserDataModal extends React.Component {

    handleClose = () =>{
        this.props.handleclose()
    }

    render() {
        return (
            <div>
                <Modal show={this.props.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* <p>{this.props.userName}</p> */}
                        <p>{this.props.formData.userName}</p>
                        <p>{this.props.formData.height}</p>
                        <p>{this.props.formData.breed}</p>
                        <p>{(this.props.formData.likeCats)?'I like cats':'I dont like cats'}</p>
                
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleclose}>
                            Close
                        </Button>
                    
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default UserDataModal
