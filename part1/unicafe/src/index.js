import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) =>  {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if(props.total !== 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <Statistic text='Good' value={props.good}/>
            <Statistic text='Neutral' value={props.neutral}/>
            <Statistic text='Bad' value={props.bad}/>
            <Statistic text='All' value={props.total}/>
            <Statistic text='Average' value={props.average()}/>
            <Statistic text='Positive' value={props.positive()}/>
          </tbody>
        </table>
      </div>
    )
  }

  return <p>No feedback given.</p>
}

const Button = (props) => {
  return(
  <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleClickFeedback = (feedback) => () => {
    switch (feedback) {
      case 'good':
        setGood(good+1)
        setTotal(total+1)
        break;

      case 'neutral':
        setNeutral(neutral+1)
        setTotal(total+1)
        break;

      case 'bad':
        setBad(bad+1)
        setTotal(total+1)
        break;
    
      default:
        break;
    }
  }

  const calculateAverage = () => (good-bad)/total

  const calculatePositivePercent = () => good/total*100

  return (
    <div>
      <h2>Give feedback</h2>
      <Button text='good' handleClick={handleClickFeedback('good')}/>
      <Button text='neutral' handleClick={handleClickFeedback('neutral')}/>
      <Button text='bad' handleClick={handleClickFeedback('bad')}/>

      <br/>

      <Statistics good={good} bad={bad} neutral={neutral} total={total} average={calculateAverage} positive={calculatePositivePercent} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
