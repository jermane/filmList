import React, {Component} from 'react'; 



class Films extends Component 
{
    constructor(props){
        super(props)
        this.state = {
            filmList: []     
        }

          
    }    
        componentDidMount(){
            var film = [],
                keys = Object.keys(localStorage),
                i = keys.length;
            while ( i-- ) {
                film.push( localStorage.getItem(keys[i]))     
            }
            // console.log(film)
            this.setState({filmList: film})
            // console.log(film)
        };
         
        componentDidUpdate(newState) {
    	    console.log('newState', newState.filmList );
        };
     
    render(){
        const filmArray = this.state.filmList;
        return (<div className="List">    
            {filmArray.map((film) => (
            <div className="film">    
                <div>Title</div>
                <div>Author</div>
                <div>Year</div>
            </div>        
        ))}
            
        </div>)
    }
 
}
               
export default Films;