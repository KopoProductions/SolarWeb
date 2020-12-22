import React from 'react';
import './Card.style.scss';

const Card = ({ children, onClick, id }) => {
    return (
        <section onClick={onClick} className='Card' id={id} >
            <p className='Card__Text' >{children}</p>
        </section>
    );
};

export default Card;