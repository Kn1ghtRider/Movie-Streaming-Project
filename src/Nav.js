import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import './Nav.css'
import 'typeface-sedgwick-ave-display';


function Nav() {
    const [show, handleShow] = useState(false);
    const navigate= useNavigate();
    const location = useLocation();

    useEffect(() => {

        window.addEventListener("scroll", () => {   
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", () => {});
        };
    } , []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
         <p 
         onClick={() => navigate('/')}
         className='nav__logo'
         >Incendio</p>

         <div className="nav__contents">
        <img 
        onClick={() => navigate('/profile')}
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
        />

        
    </div>

    </div>

    




  )
}

export default Nav