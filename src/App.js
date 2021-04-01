import './App.css'
import Academic from './components/Academic'
import Bio from './components/Bio'
import Competences from './components/Competences'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header />
      <Bio />
      <Competences />
      <Academic />
    </div>
  )
}

export default App