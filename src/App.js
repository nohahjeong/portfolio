import './App.css'
import Academic from './components/Academic'
import Bio from './components/Bio'
import Competences from './components/Competences'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header />
      <Bio />
      <Competences />
      <Academic />
      <Contact />
      <Footer />
    </div>
  )
}

export default App