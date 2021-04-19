import React from 'react';
import './App.css';
import Header from './Header';
import ResultContainer from './ResultContainer';
import SearchBox from './SearchBox';
/*function App(){

    return <h1>This is my function</h1>;
} */

const name= require('@rstacruz/startup-name-generator');

class App extends React.Component{
    state={
        headerText:'Name Suggestor',
        headerExpanded:true,
        suggestedNames:[]
    }

    handleInputChange=(inputText)=>{
        
        //alert("Iam called");
        this.setState({headerExpanded:!inputText,
            suggestedNames:inputText?name(inputText):[]})
    }
    render(){

        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} headTitle={this.state.headerText}/>
                <SearchBox onInputChange={this.handleInputChange}/>
                <ResultContainer suggestedNames={this.state.suggestedNames}/>
            </div>
        )
    }
}

export default App;
