import React, { useState } from 'react'
import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import About from './components/About'
import Trades from './components/Trades'
import Admission from './components/Admission'
import Instructor from './components/Instructor'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons' // Add this import
import './App.css'
import Contact from './components/Contact'

function App() {
  const [activeTab, setActiveTab] = useState('Home')

  const renderComponent = () => {
    switch(activeTab) {
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
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">
        {renderComponent()}
      </main>
      <Footer />
      <FloatingButtons /> {/* Add this line - after Footer */}
    </div>
  )
}

export default App