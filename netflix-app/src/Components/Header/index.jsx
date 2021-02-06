import React from 'react'
import './Header.css'

export default ({isBlack}) => {

    return (
        
        <header className={isBlack ? 'Black' : 'Gradient'}>

            <div className="Header--Logo">

                <a href="/">
                    <img src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png'></img>
                </a>

            </div>
            
            <div className="Header--User">

                <a href="/">
                    <img src= 'https://i.pinimg.com/originals/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.png'></img>
                </a>

            </div>

        </header>
    )
}