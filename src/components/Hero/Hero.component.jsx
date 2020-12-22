import React from 'react';
import Articles from '../Articles/Article.component';
import CTA from '../CTA/CTA.component';
import Pointer from '../Pointer/Pointer.component';
import Title from '../Title/Title.component';
import './Hero.style.scss'

const Hero = () => {
    return (
        <section className='Hero' >
            <section className='Hero__Left-Container' >
                <Title >How does going green Benefit you & the world.</Title>
                <Articles >
                    <Pointer >Fixed Rate pricing.</Pointer>
                    <Pointer >Pay half of what you pay right now.</Pointer>
                </Articles>
                <CTA >Schedule Now</CTA>
            </section>
            <section className='Hero__Right-Container' >
                <section className='Hero__Right-Container__PH' />
            </section>
        </section>
    );
};

export default Hero;