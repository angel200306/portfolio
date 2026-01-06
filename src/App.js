import React from "react"
import Image from "./components/Image"
import logo from "./img/gallery.png"

class App extends React.Component {
    string = "My portfolio site"
    paragraf = "Hello! I'm Noviva. I'm Python Developer. I developed project in Python. And also I can developed web site. I know Python, aiogram, HTML, css, JS and React.js. You can veaw my solo projects cleack “My projects„."
    string1 = "My solo projects"
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
        </div>)
    }
}

export default App