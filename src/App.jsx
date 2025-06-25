import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Subtitle from './components/Subtitle'

function App() {

  return (
    <>
      <Header />
      <main>
        <Subtitle />
      </main>
    </>
  )
}

export default App
