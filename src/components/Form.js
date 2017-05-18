import React, {Component} from 'react';  
import SingleInput from '../components/SingleInput'; 


const film =[];

class FormContainer extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      actor: '',
      year: '',
      filmList: [] 
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleActor = this.handleActor.bind(this);
    this.handleYear = this.handleYear.bind(this);
    this.handleFilmList = this.handleFilmList.bind(this);
  }

  handleTitle(e) {
    this.setState({ title: e.target.value });
  }
  handleActor(e) {
    this.setState({ actor: e.target.value });
  }
  handleYear(e) {
    this.setState({ year: e.target.value });
  }

  handleClearForm(e) {
    e.preventDefault();
     this.setState({
      title: "",
      actor: "",
      year: "",
   
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const key= Date.now();
    const film= {
      title: this.state.title,
      actor: this.state.actor,
      year: this.state.year
    };
    function addFilm(){ 
        localStorage.setItem(key, JSON.stringify(film));
    };
    this.handleClearForm(e);
    addFilm();
    this.handleFilmList();
  }

  handleFilmList(){
    var keys = Object.keys(localStorage),
        i = keys.length;
    while ( i-- ) {
    film.push( localStorage.getItem(keys[i]))     
      }
    // console.log('this is film:' + film); 
    this.setState({filmList: film});
    console.log('this is filmList' + this.state.filmList);
  }
  componentdidMount(){
    if (this.state.filmList !== film) {
     this.handleFilmList()
    } else {
      return
    }
  }
  
  render() {
    this.handleFilmList()
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <div className="input">
          <label for="title">Title
            <SingleInput
              className='textBox'
              inputType={'text'}
              name={'title'}
              controlFunc={this.handleTitle}
              content={this.state.title}
              placeholder={'Enter Movie Title Here'} />
          </label> 
          <label for="Actor">Actor/Actress 
            <SingleInput
              inputType={'text'}
              name={'actor'}
              controlFunc={this.handleActor}
              content={this.state.actor}
              placeholder={'Enter Leading Role Here'} />
          </label>
          <label for="Year">Year
            <SingleInput
              inputType={'text'}
              name={'year'}
              controlFunc={this.handleYear}
              content={this.state.year}
              placeholder={'Enter Year Here'} />
          </label>  
          <div className="button">
            <input
              type="submit"
              className="submit"
              value="Submit"/>
          </div>
        </div>
      </form>
      
    );
  }
}

export default FormContainer;