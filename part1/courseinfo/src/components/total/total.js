import React from 'react'

const Total = (props) => {

    const sumExercises = () =>{
        let sum = 0
        props.parts.forEach(part =>{
            sum += part.exercises
        })

        return sum
    }


    return (
        <p>Number of exercises {sumExercises()} </p>
    )
}

export default Total