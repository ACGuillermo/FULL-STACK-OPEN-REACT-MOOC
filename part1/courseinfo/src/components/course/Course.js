import React from 'react'
import Header from '../header/header'
import Content from '../content/content'
import Total from '../total/total'


const Course = ({course}) => {
    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course