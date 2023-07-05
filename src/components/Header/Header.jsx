import React from 'react'
// import { Container, Row } from 'reactstrap'
// import logo from 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Blue_computer_icon.svg/1024px-Blue_computer_icon.svg.png'


const Header = () => {
    return (
        <header className='header'>
            <div className='nav_wrapper'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Blue_computer_icon.svg/1024px-Blue_computer_icon.svg.png' width={100} alt='logo' />
                <div className='logo'></div>
                <h1>PCBuildz.de</h1>
                <p>From enthusiasts for enthusiasts!</p>
            </div>
        </header>

    )
}

export default Header