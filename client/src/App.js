import Header from "./components/header/header.component";
import Hero from "./components/hero/hero.component";
import Footer from "./components/footer/footer.component";
import Contact from "./components/contact/contact.component";
import Portfolio from "./components/portfolio/portfolio.component";
import Resume from "./components/resume/resume.component";
import Skills from "./components/skills/skills.component";
import About from "./components/about/about.component";

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <About/>
        <Skills/>
        <Resume/>
        <Portfolio/>

        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
