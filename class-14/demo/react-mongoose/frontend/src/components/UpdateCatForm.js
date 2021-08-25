import React, { Component } from 'react'

class UpdateCatForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.updateCatInfo}>
                    <input type="text" name='catName' defaultValue={this.props.catInfo.catName} />
                    <input type="text" name='catBreed' defaultValue={this.props.catInfo.catBreed} />
                    <input type="submit" value="Update cat" />
                </form>
            </div>
        )
    }
}

export default UpdateCatForm
