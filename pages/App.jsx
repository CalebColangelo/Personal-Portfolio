import { useState } from 'react'
import '/pagesCSS/App.css'

function App() {
  return (
    <>
      <main>
        <body>
          <header>
            <h1 id='header'>Caleb Colangelo</h1>
          </header>'
          <div id='navDiv'>
            <ul>
              <li className='nav' id='aboutMe'>About Me</li>
              <li className='nav'>Portfolio</li>
              <li className='nav'>Contact</li>
              <li className='nav'>Resume</li>
            </ul>
          </div>
          </body>
          <footer>
            <img src="src\assets\images\GitHub Logo.png" id='logo' />
            <img src="src\assets\images\LinkedIn Logo.png" id='logo'/>
            <img src="src\assets\images\Instagram Logo.png" id='insta'/>
          </footer>
      </main>
    </>
  )
}
export default App
