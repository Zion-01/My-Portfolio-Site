import './App.css'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="scroll-smooth bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
        <ScrollProgress />
        <Navbar />
        <main className="max-w-6xl mx-auto px-4">
          <section id="home"><Hero /></section>
          <section id="about" className="py-20"><About /></section>
          <section id="skills" className="py-20"><Skills /></section>
          <section id="projects" className="py-20"><Projects /></section>
          <section id="contact" className="py-20"><Contact /></section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

