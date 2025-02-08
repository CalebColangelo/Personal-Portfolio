import '/pagesCSS/contact.css'

export default function AboutMe() {
    return (
        <>
            <div id='contactMe'>
                <p id='contactMeP'>
                    Need to contact me? Leave a comment and I will email you back as soon as possible!
                </p>
            </div>
            <form>
            <input type="text" id='nameInput' placeholder="Your Name:"></input>
            <input type="text" id='emailInput' placeholder="Your Email:"></input>
            <div>
            <textarea id='messageInput' placeholder="Your message to me:"></textarea>
            </div>
            <button id='btn'>Submit</button>
            </form>
        </>
    )
}
