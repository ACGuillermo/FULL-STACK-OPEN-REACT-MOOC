import React from 'react'

const Contact = ({person}) => {
    return (
        <li key={person.name}>{person.name} {person.phone}</li>
    )
}

export default Contact