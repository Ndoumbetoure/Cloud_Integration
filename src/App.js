import React from 'react'

import HeaderSection from './Components/header/Header'
import ContactSection from './Components/contact/Contact'
import MainSection from './Components/main/Main'
import FooterSection from './Components/footer/Footer'

import './App.css'

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <ContactSection />
      <MainSection />
      <FooterSection />
    </div>
  )
}

export default App
