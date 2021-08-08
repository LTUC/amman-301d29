import React from 'react';

class Square extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className='square some-margin'>Square Number {this.props.squareNumber} {this.props.childName}</div>
        )
    }
}

export default Square;