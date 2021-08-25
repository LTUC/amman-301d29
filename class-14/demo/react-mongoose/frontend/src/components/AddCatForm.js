import React, { Component } from 'react'

class AddCatForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.addCat}>
                    <input type="text" name='catName' placeholder='add cat name' />
                    <input type="text" name='catBreed' placeholder='add breed name' />
                    <input type="submit" value="Add cat" />
                </form>
            </div>
        )
    }
}

export default AddCatForm
