import React, {Component} from  'react';
import Films from './Films';


class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            searchTerm: ''       
        }   
        console.log(this.state)   
    } 
    onSearchChange = (evt)=> {
        console.log(evt.target.value);
        this.setState({searchTerm: evt.target.value})
    }
    render(){
       
    }

};

export default Search;