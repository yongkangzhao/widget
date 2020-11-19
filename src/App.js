import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title: 'what is react',
        content: 'react is a front end javascript framework'
    },
    {
        title: 'why use react?',
        content: 'react is a favorite JS library amoung engineers'
    },
    {
        title: 'how do you use react?',
        content: 'you use react by creating components'
    }
]

export default () => {
    return <div><Accordion items={items}/></div>;
}