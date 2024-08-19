import React from 'react';
import './intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import photo_remo from '../../img/photo_remo.png';

export const Intro = () => {
    return (
        <div className="intro" id="Navbar">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Rahul Remo</span>
                    <span>
                        I’m a skilled YouTube thumbnail editor with a year of experience using Photoshop to create stunning, attention-grabbing designs. 
                    </span>
                    <span> My thumbnails are crafted to make your videos stand out and attract clicks. Let’s turn your content into a visual magnet with thumbnails that drive engagement and views!</span>
                </div> 

                <div className="i-icons">
                  
                    <a href="https://www.instagram.com/rreditz___?igsh=c2pp0ThqNzY5NjE1" target="_blank" rel="noopener noreferrer">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedIn} alt="LinkedIn" />
                    </a>
                </div>
            </div>
            <div className="i-right">
            <img src={Vector1} alt="Vector1" />
            <img src={Vector2} alt="Vector2" />
                <img src={photo_remo} alt="Photo Remo" />
            </div> 
        </div>
    );
}
