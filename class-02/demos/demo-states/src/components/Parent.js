import React from 'react';
import ChildCat from './ChildCat';
import sherryImage from './assets/sherry2.jpg'

class Parent extends React.Component {
    render() {
        return (
            <>
                <h3>Parent Component</h3>
                <ChildCat catName='sherry' catImage={sherryImage}/>
                <ChildCat catName='basboos' catImage='https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'/>
            </>
        )
    }
}

export default Parent;