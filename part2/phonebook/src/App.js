import React, { useState, useEffect } from 'react'
import Contacts from './components/Contacts'
import Filter from './components/Filter'
import ContactForm from './components/ContactForm'

import contactService from './services/contacts'


const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(()=>{
    contactService
      .getAll()
      .then(contacts=>setPersons(contacts))
  }, [])

  const addNewName = (e) => {
    e.preventDefault()
    const i = persons.findIndex(person => person.name === newName)
    if(i === -1){
      setPersons([...persons, {name: newName, phone: newNumber}])
      setNewName('')
      setNewNumber('')

      contactService
        .create({name: newName, phone: newNumber})
    }else {
      if(window.confirm(`${newName} is already added. Replace number with the new one?`)){
        setNewName('')
        setNewNumber('')

        const contact = persons.find(person => person.name === newName)

        contactService
          .update(contact.id ,{name: newName, phone: newNumber})
          .then(response => {
            setPersons(persons.map(person => person.id === response.id ? response : person))
          })

      }
    }
    
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => setNewNumber(e.target.value)

  const handleFilterChange = e => setNewFilter(e.target.value)

  const handleDeleteContact = (contact) => () => {
    if(window.confirm(`Delete ${contact.name}. Are you sure?`)){
      contactService
        .del(contact.id)
        .then(response=> setPersons(persons.filter(person=> person.id !== contact.id)) )
      
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={newFilter} onChange={handleFilterChange} />

      <h3>Add a new number</h3>

      <ContactForm newName={newName} newNumber={newNumber} nameChange={handleNameChange} numberChange={handleNumberChange} addNewName={addNewName}/>
      
      <h2>Numbers</h2>
      
      <Contacts persons={persons} newFilter={newFilter} del={handleDeleteContact} />
    </div>
  )
}

export default App