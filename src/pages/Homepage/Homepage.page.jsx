import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero.component'
import Cards from '../../components/Cards/Cards.component';
import NavBar from '../../components/NavBar/NavBar.component';


class Homepage extends Component {
    render() {
        return (
            <section >
                <NavBar />
                <Hero />
                <Cards />
            </section>
        );
    }
}

export default Homepage;