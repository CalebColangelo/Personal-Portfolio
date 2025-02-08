import '/pagesCSS/portfolio.css'
import Bumsyst from '../src/assets/images/Budget.png'
import ReadMeGen from '../src/assets/images/ReadMeGen.png'
import Employee from '../src/assets/images/Employee.png'
import Vehicle from '../src/assets/images/Vehicle.jpg'

export default function AboutMe() {
    return (
        <>
            <section id="cards">
                <div className='projectCards' id='bumsystCard'>
                    <a href='https://github.com/CalebColangelo/Budget-Management'><p id="bumP">The Budget Managment System is a simple front end applicaiton that I and a team of other developers created in just a few days. It is a small, simple application that takes dynamic user input and performs math on it, stores in local storage then displays on the next page, displaying front end JavaScript competency.</p><img id='bumsyst' src={Bumsyst} /></a>
                </div>
                <div className='projectCards' id='readMeDiv'>
                    <a href='https://github.com/CalebColangelo/README-Generator'><p id='readMeP'>The README generator is a command line application using NodeJS, aimed towards developpers that would like to spend a little more time with their projects, and not worrying about having to create a preofessional README.md.</p><img src={ReadMeGen} id='readMeGen' /></a>
                </div>
                <div className='projectCards' id='employeeTracker'>
                    <a href='https://github.com/CalebColangelo/Employee-Tracker'><p id='employeeP'>The employee tracker is another NodeJS command line application, this time utilizing PostgreSQL for database storage and data persistance. This app allows comapnies to track employees departments, roles, salaries and what manager they report to.</p><img id='employeeImg' src={Employee}/></a>
                </div>
                <div className='projectCards' id='vehicleBuilder'>
                    <a href='https://github.com/CalebColangelo/Vehicle-Builder'><p id='vehicleP'>Vehicle Builder is a Typescript and NodeJS application using Inquirer to allow users to create their own vehicle object, and perform specific functions based on what class of vehicle they made. For example,if you created a truck, you could tow other vehicles within your towing capactiy. If you made a motorbike, you could perform a wheelie, but not be allowed to tow and vice versa.</p><img id='vehicleimg' src={Vehicle}/></a>
                </div>
            </section>
        </>
    )
}
