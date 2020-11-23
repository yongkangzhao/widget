import React, {useState, useEffect} from 'react'
import axios from 'axios';
const Search = () => {
    
    const [term, setTerm] = useState('Programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setDebouncedTerm(term);
        },1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [term]);


    useEffect(()=>{
        const search = (async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list:'search',
                    format:'json',
                    origin:'*',
                    srsearch:debouncedTerm
                }
            });

            setResults(data.query.search);
        });
        search();
    }, [debouncedTerm])

    const renderedResults = results.map((result) =>{
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    {result.snippet.replaceAll('<span class="searchmatch">','').replaceAll('</span>','')}
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search term</label>
                    <input value={term} onChange={e=>setTerm(e.target.value)} className="input" />
                </div>
            </div>
        <div className="ui celled list">{renderedResults}</div>
        </div>
    );
};

export default Search;


// 'en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin==*&srsearch=programming'