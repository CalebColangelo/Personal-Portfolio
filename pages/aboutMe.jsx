import '/pagesCSS/aboutMe.css'
import Caleb from '../src/assets/images/PersonalPhoto.jpeg'

export default function AboutMe() {
    return (
        <>
                <div className='aboutMeDiv'>
                    <p id='aboutMeP'>Hey there! My name is Caleb Colangelo. I am an aspiring software/web developer! I love designing front end applications, just like this one. At the time of creating this portfolio, I am 18 years old and currently enrolled in an EdX full stack coding bootcamp. My entire life I have been obsessed with technology and how computers and other tech effects our everyday lives. Enrolling in this course was a huge step in my life, and I dont regret it one bit. I would love to one day be working as a front end developer, anywhere that could use my skills and continue to enhance my web development knowledge! I have experience in HTML5, CSS3, JavaScript, TypeScript, NodeJS, React and PostgreSQL, and cannot wait to use my skills in a real world position to provide effecient and proper solutions to clients, or whomever may need them!</p>
                    <img src={Caleb} id='photo' />
                </div>
        </>
    )
}
