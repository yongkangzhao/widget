import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
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
    return (
        <div>
            {/* <Accordion items={items}/> */}
            {/* <Search /> */}
            <Dropdown />
        </div>
    );
}