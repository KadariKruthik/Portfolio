import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll';


export const Navbar=()=>{
    return (
        <div className="n-wrapper" >
            <div className="n-left">
               <div className="n-name">Portfolio</div> 
            <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:'none'}}>
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                        <li  style={{color: '#FCA61F'}}>Home</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'>
                        <li style={{color: '#FCA61F'}}>Experience</li>
                        </Link>
                        <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
                <button className="button n-button">
                    Contact Me
                </button>
                </Link>

                    </ul>
                </div>
               
               
                
            </div>
        </div>
    )
}