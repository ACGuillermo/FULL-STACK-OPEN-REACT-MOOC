import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(pointsArray)

  const handleClickRandomAnecdote = () => setSelected(Math.floor(Math.random() * (5 - 0 + 1)) + 0)

  const handleClickVoteAnecdote = (selected) => () => {
    let copyPoints = [...points]
    copyPoints[selected] += 1
    setPoints(copyPoints)
  }

  const anecdoteMostVotes = () => {
    let biggestNumber = Math.max(...points)
    return points.findIndex((value) => value === biggestNumber)
  }
  return (
    <div>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}
      <br/>
      <h4>Votes: {points[selected]}</h4>
      <button onClick={handleClickRandomAnecdote}>Random</button>
      <button onClick={handleClickVoteAnecdote(selected)}>Vote anecdote</button>
      
      <h2>Anecdote with most votes</h2>
      {props.anecdotes[anecdoteMostVotes()]}
    </div>
  )
}
const pointsArray = new Array(6+1).join('0').split('').map(parseFloat)
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)