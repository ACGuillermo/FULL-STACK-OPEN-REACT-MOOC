import React from 'react'
import Part from './part/part'

const Content = (props) => {
    console.log(props)
    return (
        <div>
            {props.parts.map(part=>(
                <Part key={part.id}part={part.name} exercises={part.exercises} />
            ))}
        </div>
    )
}

export default Content