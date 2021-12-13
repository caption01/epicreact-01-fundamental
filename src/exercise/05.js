// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor, fontStyle) for the color and the font style
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

const Box = ({ size, style, ...otherProps }) => {
  return  <div className={`box box--${size}`} style={{fontStyle: 'italic', ...style}} {...otherProps} />
}

const smallBox = <Box className='box box--small'>small lightblue box</Box>
const mediumBox = <Box className='box box--medium'>medium pink box</Box>
const largeBox = <Box className='box box--large'>large orange box</Box>

function App() {
  return (
    <div className='box'>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box size="medium" style={{backgroundColor: 'red'}}>
        small lightblue box
      </Box>
    </div>
  )
}

export default App
