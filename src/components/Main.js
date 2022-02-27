export default function Main () {
    return (
        <main>
            <h1>Labheshwar</h1>
            <p className = "main--work">MERN Stack Developer</p>
            <p className = "main--website">mywebsite.com</p>
            
            <div className="main--buttons">
                <button className = "main--email">
                    <a href="mailto:labeshsharma2001@gmail.com">
                        <img src={require("../images/email-Icon.png")} alt="email-icon" className = "main--icons"/>
                        <span>
                            Email
                        </span>
                    </a>
                </button>
                <button className = "main--linkedin">
                    <a href="https://www.linkedin.com/in/labheshwar/">
                        <img src={require("../images/linkedin-icon.png")} alt="linkedin-icon" className = "main--icons"/>
                        <span>
                            LinkedIn
                        </span>
                    </a>
                </button>
            </div>

            <div className="main--about">
                <h1>About</h1>
                <p>I am a tech geek who is fascinated by the technology of modern World and would love to contribute for a better World. I belive only technology can change the World and I am very much sure on that. I love coding, it's like a hobby for me. Currently I am bulding my skills in MERN Stack and trying to build better projects on the same.</p>
            </div>

            <div className="main--interests">
                <h1>Interests</h1>
                <p>Gaming, YouTube, Movies, Music, Travelling, Coffee, Food, Programmng, Riding.</p>
            </div>
        </main>
    )
}