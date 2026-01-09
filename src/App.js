import React from "react"
import Image from "./components/Image"
import logo from "./img/gallery.png"
import logo1 from "./img/StudyEnglishBot.jpg"
import logo2 from "./img/Learn Map.png"

class App extends React.Component {
    string = "My portfolio site"
    paragraf = "Hello! I'm Noviva. I am a young programmer who strives to learn new frameworks and improve my skills. I am a front-end developer, and I also know a little bit about back-end development. The purpose of this website is to show you my skills in my pet projects. Disclaimer!!! My pet projects are not commercial at this time. Not all projects may be perfect, but I am still working on them to bring them to perfection"
    string1 = "My solo projects"
    string2 = "My skils"
    paragraf1 = "My skills include HTML, CSS, JS, React, and Flask."
    render() {
        return (<div className="name">
            <h1>{this.string}</h1>
            <p>{this.paragraf}</p>
            <h2>{this.string1}</h2>
            <a href="https://angel200306.github.io/Gallery/"
               target="_blank"
               rel="noopener noreferrer">
            <Image image={logo} />
            </a>
            <a href="https://angel200306.github.io/AboutMyEnglishBot/"
               target="_blank"
               rel="noopener noreferrer">
               <Image image={logo1} />
            </a>
            <a href="https://angel200306.github.io/Learn-Map/"
               target="_blank"
               rel="noopener noreferrer">
                <Image image={logo2} />
            </a>
            <h2>{this.string2}</h2>
            <p>{this.paragraf1}</p>
        </div>)
    }
}

export default App