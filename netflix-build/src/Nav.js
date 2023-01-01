import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        (window.scrollY > 100 ) ? handleShow(true) : handleShow(false)
    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar)
    },[]);
  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className='nav__contents'>
            <img className = "nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt=""></img>
            <img className = "nav__avatar" src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=""></img>
        </div>
    </div>
  )
}

export default Nav
