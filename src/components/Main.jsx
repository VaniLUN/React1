import './Main.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Clock from './Clock'
export default function Main(){
    const [isOpen, setisOpen] = useState(false) 
    console.log("create")
    console.log(isOpen)
    const click = ()=>{
        // let element=document.getElementById("second")
        // element.classList.toggle("open")
        setisOpen(prevstate => !prevstate)

    }
    
    return(
        <div id="parent">
            <div id="first">
                <h1 align="center">The game</h1>
                <button className="Button" onClick={click}><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /></button>
            </div>
            <CSSTransition
                in={isOpen}
                timeout={300}
                classNames="bar-transition"
                unmountOnExit
            >
            <div id='bar' className='bar-content'>
                {/* <a href="#">Главная</a>
                <a href="#">Игра</a>
                <a href="#">О нас</a> */}
                <Link to='/'>Главная</Link>
                <Link to='/game'>Игра</Link>
                <Link to='/about'>О нас</Link>
            </div>
            </CSSTransition>
        </div>
    )
}