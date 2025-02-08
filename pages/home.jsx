
import '/pagesCSS/home.css'

export default function Home() {
  return (
    <>
            <div className='homeDiv'>
            <p id='homeP'>Hello there! Welcome to my portfolio. As you can see in the header, my name is Caleb Colangelo. To see more about me, please use the navigation at the top of the screen. Here are some pictures of my pets, just for fun:</p>
            </div>
            <div id='imageDiv'>
              <img className='images' src='../src/assets/images/Chester.jpeg'/>
              <img className='images' src='../src/assets/images/Benny.png'/>
              <img className='images' src='../src/assets/images/Dash.jpeg'/>
              <img className='images' src='../src/assets/images/Max.jpeg' />
            </div>
    </>
  )
}

