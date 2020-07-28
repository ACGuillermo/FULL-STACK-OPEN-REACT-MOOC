import React, { useState } from 'react'
import ReactDOM from 'react-dom'

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

  const Statistic = (props) =>  {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    )
  }

  const Statistics = (props) => {
    if(total !== 0) {
      return (
        <div>
          <h2>Statistics</h2>
          <table>
            <tbody>
              <Statistic text='Good' value={good}/>
              <Statistic text='Neutral' value={neutral}/>
              <Statistic text='Bad' value={bad}/>
              <Statistic text='All' value={total}/>
              <Statistic text='Average' value={calculateAverage()}/>
              <Statistic text='Positive' value={calculatePositivePercent()}/>
            </tbody>
          </table>
        </div>
      )
    }

    return <p>No feedback given.</p>
  }

  return (
    <div>
      <h2>Give feedback</h2>
      <button onClick={handleClickFeedback('good')}>good</button>
      <button onClick={handleClickFeedback('neutral')}>neutral</button>
      <button onClick={handleClickFeedback('bad')}>bad</button>

      <br/>

      <Statistics />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
