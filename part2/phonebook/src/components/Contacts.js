import React from 'react'
import Contact from './Contact'

const Contacts = ({persons, newFilter}) => {
    return (
        <ul>
            {persons.filter(person=>person.name.toLowerCase().startsWith(newFilter.toLowerCase())).map(person=>{
            return <Contact person={person}/>
            })}
        </ul>
    )
}

export default Contacts