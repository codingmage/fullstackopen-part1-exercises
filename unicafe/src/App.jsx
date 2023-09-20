import { useState } from 'react'

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
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>

      <h2>statistics</h2>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}

export default App