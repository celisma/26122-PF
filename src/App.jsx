
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element = {<h1>Home</h1>}/>
        </Routes>
      </main>
     
    </>
  )
}

export default App
