import AboutSection from "./AboutSection"
import ContactSection from "./ContactSection"
import ExperianceSection from "./ExperianceSection"
import Footer from "./Footer"
import Header from "./Header"
import HeroSection from "./HeroSection"
import ProjectSection from "./ProjectSection"
import SkillsSection from "./SkillsSection"

export default function Main (props) {
    return (
        <div className="bg-white">
            <Header
                {...props}
            />
            
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectSection/>
            <ExperianceSection/>
            <ContactSection/>
            <Footer/>
        </div>
  )












}