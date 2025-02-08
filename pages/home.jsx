
import '/pagesCSS/home.css'
import Benny from '../src/assets/images/Benny.png'
import Chester from '../src/assets/images/Chester.jpeg'
import Dash from '../src/assets/images/Dash.jpeg'
import Max from '../src/assets/images/Max.jpeg'

export default function Home() {
  return (
    <>
        <div className='homeDiv' style={{ overflow: "hidden"}}>
          <p id='homeP'>Hello there! Welcome to my portfolio. As you can see in the header, my name is Caleb Colangelo. To see more about me, please use the navigation at the top of the screen. Here are some pictures of my pets, just for fun:</p>
        </div>
        <div id='imageDiv'>
          <img className='images' src={Chester} />
          <img className='images' src={Benny} />
          <img className='images' src={Dash} />
          <img className='images' src={Max} />
        </div>
    </>
  )
}

