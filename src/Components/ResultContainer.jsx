import React from 'react';
import NameCard from './NameCard';
import './ResultContainer.css';


const ResultContainer=(props)=>{
    const suggested=props.suggestedNames.map(suggestedName=>{
        return <NameCard key={suggestedName} suggestedName={suggestedName}/>
    })
    return (<div className="results-container">
        {suggested}
    </div>
    )
}

export default ResultContainer;
