import React from 'react'
import Header from "./Components/Header"
import LandingSection from "./Components/LandingSection"
import ProjectSection from './Components/ProjectSection'
import ContactMeSection from './Components/ContactMeSection'
import Footer from "./Components/Footer"
import { AlertProvider } from "./context/alertContext";
import Alert from "./Components/Alert";
export default function App() {
  return (
      <AlertProvider>
    <div className='App'>
    <Header />
    <LandingSection />
    <ProjectSection />
    <ContactMeSection />
    <Footer />
    <Alert />
    </div>
      </AlertProvider>
  )
}
