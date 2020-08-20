import React from 'react'

class PersonTemplate extends React.Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.name} <br /> Age: {this.props.age}</p>
                
            </div>
        )
    }
}


export default PersonTemplate
