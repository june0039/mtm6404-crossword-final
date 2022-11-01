const dataset = [
  { word: 'AFTER', clue: 'Behind in place' },
  { word: 'BADGES', clue: 'Boy Scouts earn them' },
  { word: 'COLA', clue: 'Soft drink' },
  { word: 'DULL', clue: 'Blunt'},
  { word: 'EGO', clue: 'It may be bruised or inflated'},
  { word: 'FADE', clue: 'Grow dimmer'},
  { word: 'GATE', clue: 'Stadium entrance'},
  { word: 'HERO', clue: 'Medal of Honor recipient'},
  { word: 'ILLUME', clue: 'Shed light on' }
]

function Score ({ score }) {
  return (
    <div className="row mb-5">
      <div className="col">
        <h2 className="display-4 text-center">
          Score <br />
          {score}
        </h2>
      </div>
    </div>
  )
}

function Clue ({ clue, word }) {
  return (
    <div className="row mb-5">
      <div className="col text-center">
        <h2>{clue}</h2>
        <p><em>{word.length} Letters | Starts with {word[0]}</em></p>
      </div>
    </div>
  )
}

function Response ({ message }) {
  const className = `alert alert-info ${message ? 'visible' : 'invisible'}`
  
  return (
    <div className="row mb-5">
      <div className="col">
        <div className={className}>{message || '&nbsp;' }</div>
      </div>
    </div>
  )
}

function Form () {
  
  return (
    <div className="row mb-5">
      <div className="col-6 offset-3">
        <form className="form">
          <input type="text" className="form-control text-uppercase" />
        </form>
      </div>
    </div>
  )
}

function Button ({ text, variant }) {
  const className = `btn btn-${variant}`

  function clickHandler () {

  }

  return (
    <div className="row">
      <div className="col d-flex justify-content-center">
        <button type="button" className={className} onClick={clickHandler}>{text}</button>
      </div>
    </div>
  )
}

function App () { 
  const puzzles = dataset
  const puzzle = puzzles[0]
  const score = 2 
  const message = 'First word.'

  return (
    <div className="container p-5">
      <Score score={score} />
      <Clue clue={puzzle.clue} word={puzzle.word} />
      <Response message={message} />
      <Form />
      <Button text="Skip" variant="danger" />
      <Button text="Play Again?" variant="primary" />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)