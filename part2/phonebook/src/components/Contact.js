import React from 'react'

const Contact = ({person, del}) => {
    return (
        <li>{person.name} {person.phone} <button onClick={del(person)}>Delete</button></li>
    )
}

export default Contact