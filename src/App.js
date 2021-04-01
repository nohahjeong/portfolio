import './App.css'
import Academic from './components/Academic'
import Bio from './components/Bio'
import Competences from './components/Competences'
import Contact from './components/Contact'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header />
      <Bio />
      <Competences />
      <Academic />
      <Contact />
    </div>
  )
}

export default App