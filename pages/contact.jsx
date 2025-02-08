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
                <input type="text" id='nameInput' placeholder="Your Name:" required></input>
                <input type="email" id='emailInput' placeholder="Your Email:" required></input>

                <div>
                    <textarea id='messageInput' placeholder="Your message to me:" required></textarea>
                </div>
                <button id='btn'>Submit</button>
            </form>
        </>
    )
}

