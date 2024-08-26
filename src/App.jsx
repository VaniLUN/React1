import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main'
import Content from './components/Content'
import Footer from './components/footer'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Home(){
  return (
    <Content></Content>

  )
}
function Game(){
  return (
    <h1>Game</h1>
  )
}
function About(){
  return (
    <h1>About</h1>
  )
}
function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='mainPage'>
      <Router>
        <Main></Main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/game' element={<Game />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
    
  )
}

export default App

// const inc=()=>{
//   secCounter(counter+1)
// }
// const inc3 = ()=>{
//   inc()
//   inc()
//   inc()
// }