
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const jsxElement=<h1>I am a JSX element</h1>
    const header=(<header>
            <h1>Welcome to React</h1>
            <h2>Getting Started React</h2>
            <h3>JavaScript Library</h3>
        </header>
    )
    const fragment=(
        <>
            <h1>Welcome to React</h1>
            <h2>Getting Started React</h2>
            <h3>JavaScript Library</h3>
        </>)
    const footer=(
        <footer>
            <p>Copyright &copy; 2024</p>
        </footer>)
  return (
      <>
          {jsxElement}
          {header}
          {fragment}
          {footer}
      
    </>
  )
}

export default App
