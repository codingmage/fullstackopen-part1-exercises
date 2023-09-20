import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
  <button onClick={handleClick}>
    {text}
  </button>)
}

const StatisticsLine = ({text, value, isPercentage}) => {
  return (
    <tr><td>{text}</td><td>{value} {isPercentage}</td></tr>
  )
}

const Statistics = ({good, neutral, bad, total, average, positive}) => {
  /* const noFeedback = total == 0 */

  if (total == 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h2>statistics</h2>

      <table>
        <tbody>
          <StatisticsLine text='good' value={good} />
          <StatisticsLine text='neutral' value={neutral} />
          <StatisticsLine text='bad' value={bad} />
          <StatisticsLine text='total' value={total} />
          <StatisticsLine text='average' value={average} />
          <StatisticsLine text='positive' value={positive} isPercentage='%' />
        </tbody>

      </table>

    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    const numberGood = good + 1
    setGood(numberGood)
    const newTotal = numberGood + neutral + bad
    setTotal(newTotal)
    setAverage((numberGood + 0 - bad) / newTotal)
    setPositive((numberGood/newTotal) * 100)
  }

  const handleNeutral = () => {
    const numberNeutral = neutral + 1
    setNeutral(numberNeutral)
    const newTotal = good + numberNeutral + bad
    setTotal(newTotal)
    setAverage((good + 0 - bad) / newTotal)
    setPositive((good/newTotal) * 100)
  }

  const handleBad = () => {
    const numberBad = bad + 1
    setBad(numberBad)
    const newTotal = good + neutral + numberBad
    setTotal(newTotal)
    setAverage((good + 0 - numberBad) / newTotal)
    setPositive((good/newTotal) * 100)
  }



  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />

      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive}/>

    </div>
  )
}

export default App