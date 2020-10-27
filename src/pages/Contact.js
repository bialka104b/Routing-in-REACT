//Nasza podstrona Formularz kontaktowy
import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';
//Prompt to coś takiego co poinformuje uzytkownika że ma niedokończone akcje na stronie

class Contact extends Component {
  state = {
    textarea: '',//pusty string w polu tekstowym
    isTextareaEmpty: true //text area jest pusty na początku
  }
  handleChange = (e)=> {
    if(e.target.value.length > 0){
      this.setState({//text area nie jest pusty bo jest conajmniej 1 znak wpisany
        textarea: e.target.value,
        isTextareaEmpty: false
      })
    } else if (e.target.value.length === 0) {
      this.setState({//text area jest pusty
        textarea: e.target.value,
        isTextareaEmpty: true
      })
    }
  }
  handleSubmit = (e)=> {
    this.setState({
      
    })
  }

  render(){
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          {/* Button owinięty formem ze zdarzeniem onSubmit zadziała tak samo jak onClick umieszczony na buttonie */}
          <h1>Napisz do nas!</h1>
          <textarea 
            cols="30" 
            rows="10" 
            placeholder="Wpisz swoją wiadomość"
            onChange={this.handleChange}
            value={this.state.textarea}
          >
          </textarea>
          <button>Wyślij</button>
        </form>
        {/* when={} kiedy ma sie wywołać komponent Prompt? kiedy text area nie jest pusta */}
        <Prompt when={!this.state.isTextareaEmpty} message="Nie wysłałeś formularza. Na pewno chcesz opuścić strone?"/>
      </div>
    );
  }
}
export default Contact;