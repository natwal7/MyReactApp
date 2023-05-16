import logo from './logo.svg';
import './App.css';
import Multibutton from './Multibutton';
import SubmitButton from './SubmitButton';
import { useState } from "react";

function App() {

  

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello world!</p>
        <p>Ready to begin?</p>
      </header>

      <div>
        <div className='initialQuestions'>
          <p className="sectionTitle">Okay, first question:</p>
          <label>What's your name? </label>
          <input placeholder='ex. Jessica'></input>
          <br />
          <label>Favorite color? </label>
          <input placeholder='ex. Green'></input>
          <br />
          <label>How old are you? </label>
          <input type="number" min="0" max="130"></input>
        </div>

        <div className="checkboxQuestions">
          <p className="sectionTitle">Which of the following statements apply to you? </p>
          <label>I enjoy reading</label>
          <input type="checkbox"></input>
          <br />
          <label>I enjoy running</label>
          <input type="checkbox"></input>
          <br />
          <label>I dislike homework</label>
          <input type="checkbox"></input>
          <br />
          <label>I dislike cats</label>
          <input type="checkbox"></input>
        </div>
        <div className="schoolType">
          <p className="sectionTitle">What kind of school do you attend?</p>
          <Multibutton items={['Public', 'Private', 'Charter', 'Homeschool', 'Other']}/>
        </div>
        <div className="submit">
          <p className="sectionTitle">Ready to finish?</p>
         <SubmitButton/>

        </div>
      </div>
    </div>
  );
}

export default App;




{/* <Multibutton items={[['one', 'ONE'], ['two', 'TWO'], ['three', ]]}></Multibutton> */}