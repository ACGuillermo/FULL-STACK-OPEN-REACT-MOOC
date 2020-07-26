import React from 'react'

const Total = (props) => {

    const sumExercises = (parts) =>{
        let sum = 0
        parts.forEach(part =>{
            sum += part.exercises
        })

        return sum
    }

    
    return (
        <p>Number of exercises {sumExercises(props.parts)} </p>
    )
}

export default Total