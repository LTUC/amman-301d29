import React, { Component } from 'react'

export class Cats extends Component {

    deleteCatFunc = () =>{
        this.props.deleteCat(this.props.cat._id)
    }
    render() {
        return (
            <>
                <div key={this.props.idx}>
                    {this.props.cat.catName}
                    {this.props.cat.catBreed}
                    {this.props.cat._id}

                    {/* <button onClick={()=>{this.props.deleteCat(this.props.cat._id)}}>Delete</button> */}
                    <button onClick={this.deleteCatFunc}>Delete</button>
                    <button onClick={()=>{this.props.updateCat(this.props.cat._id)}}>Update</button>
                </div>
            </>
        );
    }
}

export default Cats
