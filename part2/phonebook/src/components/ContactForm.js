import React from 'react'

const ContactForm = ({newName, newNumber, nameChange, numberChange, addNewName}) => {
    return (
        <form onSubmit={addNewName}>
            <div>
                name: <input value={newName} onChange={nameChange} />
                number: <input value={newNumber} onChange={numberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default ContactForm