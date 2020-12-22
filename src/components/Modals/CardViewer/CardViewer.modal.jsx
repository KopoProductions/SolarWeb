import React from 'react';
import './CardViewer.styles.scss'

const CardViewer = ({ onClick, cards, card }) => {

    const { title, subTitle, text} = cards[card]

    return (
        <section className='CardViewer' onClick={onClick} >
            <section className='CardViewer__Container' onClick={e => e.stopPropagation()} >
                <h2 className='CardViewer__Container__Title' >{title}</h2>
                <h3 className='CardViewer__Container__Sub-Title' >{subTitle}</h3>
                <p className='CardViewer__Container__Text'>{text}</p>
            </section>
            <p className='CardViewer__X'>X</p>
        </section>
    );
};

export default CardViewer;