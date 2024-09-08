import Navbar from "./component/navBar";
import Footer from "./component/footer";

import Home from "./pages/home";
import About from "./pages/about";
import Project from "./pages/project";
import Skills from "./pages/skills";
import Services from "./pages/service";
import Contact from "./pages/home";


import './App.css'

function App() {


    return (
        <div>
            <Navbar/>
            <Home/>
            <About/>
            <Services/>
            <Project/>
            <Skills/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App