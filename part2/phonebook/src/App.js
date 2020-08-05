import React, { useState } from 'react'
import Contacts from './components/Contacts'
import Filter from './components/Filter'
import ContactForm from './components/ContactForm'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone: '957 74 85 97' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  const addNewName = (e) => {
    e.preventDefault()
    const i = persons.findIndex(person => person.name === newName)
    if(i === -1){
      setPersons([...persons, {name: newName, phone: newNumber}])
      setNewName('')
      setNewNumber('')
    }else alert(`${newName} is already added to phonebook`)
    
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => setNewNumber(e.target.value)

  const handleFilterChange = e => setNewFilter(e.target.value)

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={newFilter} onChange={handleFilterChange} />

      <h3>Add a new number</h3>

      <ContactForm newName={newName} newNumber={newNumber} nameChange={handleNameChange} numberChange={handleNumberChange} addNewName={addNewName}/>
      
      <h2>Numbers</h2>
      
      <Contacts persons={persons} newFilter={newFilter} />
    </div>
  )
}

export default App