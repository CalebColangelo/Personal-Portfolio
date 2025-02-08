import { Outlet } from 'react-router-dom';
import './app.css'
import Github from '../src/assets/images/GitHub Logo.png'
import Linkedin from '../src/assets/images/LinkedIn Logo.png'
import Instagram from '../src/assets/images/Instagram Logo.png'

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
              <li className='nav'> <a target="_blank" href='https://drive.google.com/file/d/1pfaXida3Nuhf59StNnF99Ebez_vA1kQO/view?usp=sharing'>Resume</a> </li>
            </ul>
          </div>
        <Outlet />
      <footer>
        <a href='https://github.com/CalebColangelo'><img src={Github} id='logo' /></a> 
          <a href="https://linkedin.com"><img src={Linkedin} id='logo' style={{marginLeft: '25px'}}/></a>
          <a href='https://www.instagram.com/caleb.colangelo/'><img src={Instagram} id='insta'/></a>
        </footer>
    </div>
  )
}
export default App