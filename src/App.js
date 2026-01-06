import React from "react"

class App extends React.Component {
    string = "My portfolio site"
    paragraf = "Hello! I'm Noviva. I'm Python Developer. I developed project in Python. And also I can developed web site. I know Python, aiogram, HTML, css, JS and React.js. You can veaw my solo projects cleack “My projects„."
    render() {
        return (<div className="name">
            <h1>{this.string}</h1>
            <p>{this.paragraf}</p>
        </div>)
    }
}

export default App