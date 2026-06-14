import React, { useState } from 'react'
import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import About from './components/About'
import Trades from './components/Trades'
import Admission from './components/Admission'
import Instructor from './components/Instructor'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import Modal from './components/Modal' // Import Modal

import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('Home')

  const renderComponent = () => {
    switch (activeTab) {
      case 'Home':
        return <HeroSlider />
      case 'About':
        return <About />
      case 'Trades':
        return <Trades />
      case 'Admission':
        return <Admission />
      case 'Instructor':
        return <Instructor />
      case 'Contact':
        return <Contact />
      default:
        return <HeroSlider />
    }
  }

  return (
    <div className="app">
      {/* Admission Popup Modal */}
      <Modal />

      {/* Website Header */}
      <Header 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content */}
      <main className="main-content">
        {renderComponent()}
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp, Call, etc Floating Buttons */}
      <FloatingButtons />
    </div>
  )
}

export default App