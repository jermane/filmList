import React, {Component} from 'react';  
import SingleInput from '../components/SingleInput';  


class FormContainer extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      actor: '',
      year: ''
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleActor = this.handleActor.bind(this);
    this.handleYear = this.handleYear.bind(this);
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
      year: ""
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
    addFilm();
    this.handleClearForm(e);
  }
 
  render() {
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