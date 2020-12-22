import React from 'react';
import './NavBar.styles.scss';
import logo from '../../assets/imgs/logo.png'

const NavBar = () => {
    return (
        <header className='NavBar' >
            <img className='NavBar__Logo' src={logo} />
            <section className='NavBar__Container' >
                <h2 className='NavBar__Container__Link active' >Home</h2>
                <h2 className='NavBar__Container__Link' >FAQs</h2>
                <h2 className='NavBar__Container__Link' >Financing</h2>
            </section>
            
        </header>
    );
};

export default NavBar;