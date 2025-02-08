import { Outlet } from 'react-router-dom';
import '../pagesCSS/app.css'

function App() {
  return (
    <div className='container'>
         <header>
            <h1 id='header'>Caleb Colangelo</h1>
          </header> 
          <div id='navDiv'>
            <ul>
              <li className='nav'><a href='/'>Home</a></li>
              <li className='nav'> <a href="/AboutMe">About Me</a> </li>
              <li className='nav'> <a href="/Portfolio">Portfolio</a> </li>
              <li className='nav'> <a href='/Contact'>Contact</a> </li>
              <li className='nav'> <a href='/Resume'>Resume</a> </li>
            </ul>
          </div>
        <Outlet />
      <footer>
          <img src="src\assets\images\GitHub Logo.png" id='logo' />
          <img src="src\assets\images\LinkedIn Logo.png" id='logo' />
          <img src="src\assets\images\Instagram Logo.png" id='insta' />
        </footer>
    </div>
  )
}
export default App