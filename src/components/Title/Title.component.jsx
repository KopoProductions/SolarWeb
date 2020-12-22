import React from 'react';
import './Title.styles.scss'

const Title = ({ children }) => {
    return (
        <p className='Title' >{children}</p>
    );
};

export default Title;