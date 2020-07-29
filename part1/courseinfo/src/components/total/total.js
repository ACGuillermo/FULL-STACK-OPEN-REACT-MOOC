import React from 'react'

const Total = (props) => {


    const sumExercises = () => {
        const sum = props.parts.reduce((s,p) => {
            return s + p.exercises
        }, 0)

        return sum
    }


    return (
        <p>Number of exercises {sumExercises()} </p>
    )
}

export default Total