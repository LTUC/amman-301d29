import React from 'react';
import './Board.css';
import Square from './Square'

class Board extends React.Component {
    render() {
        return (
            <div>
                {/* <div className='square some-margin'>Square #1</div>
                <div className='square some-margin'>Square #2</div>
                <div className='square some-margin'>Square #3</div>
                <div className='square some-margin'>Square #4</div> */}
                <Square squareNumber='1' childName='carla1'/>
                <Square squareNumber='2' childName='carla2'/>
                <Square squareNumber='3' childName='carla3'/>
                <Square squareNumber='4'childName='carla4'/>
            </div>
        )
    }
}

export default Board;