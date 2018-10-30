import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
   constructor(props) {
    super(props);
    this.state = {color: green }; // `green` is the variable declared on the line #4
    this.changeColor = this.changeColor.bind(this); // Making sure that `this` works throughout application
   }
  
  changeColor() {
    const newColor = this.state.color == green ? yellow : green; // conditional logic for the color change
    this.setState({color: newColor})
  }
  
  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        
        <button onClick={this.changeColor}>
        	Change color
      	</button>
      </div>
    );
  }
}



ReactDOM.render( <Toggle />, document.getElementById('app'));