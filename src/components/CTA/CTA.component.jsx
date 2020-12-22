import React from 'react';
import './CTA.styles.scss';

const CTA = ({ children }) => {
    return (
        <section className='CTA' >
            <p className='CTA__Text' >{children}</p>
        </section>
    );
};

export default CTA;