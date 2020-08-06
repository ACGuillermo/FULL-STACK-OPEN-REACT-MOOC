import React from 'react'
import Contact from './Contact'

const Contacts = ({persons, newFilter, del}) => {
    return (
        <ul>
            {persons.filter(person=>person.name.toLowerCase().startsWith(newFilter.toLowerCase())).map(person=>{
                return <Contact key={person.id} person={person} del={del} />
            })}
        </ul>
    )
}

export default Contacts