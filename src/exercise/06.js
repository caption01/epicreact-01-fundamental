// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)
  const [value, setValue] = React.useState('')

  // const inputRef = React.useRef(null);

  function handleSubmit(event){
    event.preventDefault()

    // const username = event?.target?.username?.value
    // const value = inputRef.current?.value
    onSubmitUsername(value)
  }

  function handleInputChange(event){
    const value = event?.target?.value
    const isValid = value === value.toLowerCase()

    if (!isValid) {
      setError('Username must be lower case')
    }

    if (isValid) {
      setError(null)
    }

    setValue(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input 
          type="text" 
          id='usernameInput' 
          onChange={handleInputChange} 
          role={error && "alert"} 
          value={value}
        />
      </div>
      <button type="submit" disabled={!!error}>Submit</button>
      {error}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
