import React from 'react';
import VLine from '../VLine/VLine.component';
import './Article.styles.scss';

const Article = ({children}) => {
    return (
        <section className='Article' >
            <VLine />
            <section className='Article__Container' >
                {children}
            </section>
        </section>
    );
};

export default Article;