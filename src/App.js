import React, {useState} from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';


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
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <button onClick={()=> setShowDropdown(!showDropdown)}>Toggle dropdown</button>
            {
                showDropdown?<Dropdown selected={selected} onSelectedChange={setSelected} options={options}/> : null
            }
            {/* <Accordion items={items}/> */}
            {/* <Search /> */}
            
        </div>
    );
};




export default App;