import React, {useState} from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
// import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

// const items = [
//     {
//         title: 'what is react',
//         content: 'react is a front end javascript framework'
//     },
//     {
//         title: 'why use react?',
//         content: 'react is a favorite JS library amoung engineers'
//     },
//     {
//         title: 'how do you use react?',
//         content: 'you use react by creating components'
//     }
// ]


const options = [
    {
        label: 'The color of red',
        value: 'red'
    },
    {
        label: 'The color of green',
        value: 'green'
    },
    {
        label: 'The color of blue',
        value: 'blue'
    }
]

const App = () => {
    // const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Translate />
            {/* <Dropdown label="Select a color"selected={selected} onSelectedChange={setSelected} options={options}/> */}
            {/* <Accordion items={items}/> */}
            {/* <Search /> */}
            
        </div>
    );
};




export default App;