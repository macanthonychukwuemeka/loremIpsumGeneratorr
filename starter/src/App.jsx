import { useState } from "react"
import data from "./data"

const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    //`parseInt()` is a built-in JavaScript function that converts a string into an integer.
    let amount = parseInt(count)
    // console.log(typeof count)
    setText(data.slice(0, amount))
  }
  return (
    <section className='section-center'>
      <h4>tired of boring lorem ipsum</h4>
      <form className='lorem-form' onClick={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          min='1'
          step='1'
          max='8'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />

        <button className='btn' type='submit'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}
export default App
