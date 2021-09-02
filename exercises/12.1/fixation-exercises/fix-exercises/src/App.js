// import React from 'react';
// import './App.css';

// function oneClick() {
//   console.log('Clicou no botão um!')
// }
// function twoClick() {
//   console.log('Clicou no botão dois!')
// }
// function threeClick() {
//   console.log('Clicou no botão três!')
// }

// class App extends React.Component {

//   render() {
//   return(
//   <div>
//     <button onClick={oneClick}>Botão 1</button>
//     <button onClick={twoClick}>Botão 2</button>
//     <button onClick={threeClick}>Botão 3</button>
//   </div>
//     )
//   }
// }
// export default App;

//-----------------------------------------------
// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   handleClick() {
//     console.log('Clicou!')
//   }

//   render() {
   
//     return <button type="button" onClick={this.handleClick}>Meu botão</button>;
//   }
// }

// export default App;

//-------------------------------------------------

// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   constructor() {
//   super()
    
//   this.oneClick = this.oneClick.bind(this)
//   this.twoleClick = this.twoClick.bind(this)
//   this.threeleClick = this.threeClick.bind(this)

//   }

//   oneClick() {
//     console.log('Clicou no botão um!')
//   }
//   twoClick() {
//     console.log('Clicou no botão dois!')
//   }
//   threeClick() {
//     console.log('Clicou no botão três!')
//   }

//   render() {
//   return(
//     <div>
//       <button onClick={this.oneClick}>Botão 1</button>
//       <button onClick={this.twoClick}>Botão 2</button>
//       <button onClick={this.threeClick}>Botão 3</button>
//     </div>
//     )
//   }
// }

// export default App;

//-------------------------------------------------

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
  super()
  
  this.state ={
    click1:0,
    click2:0,
    click3:0,
  }
    
  this.oneClick = this.oneClick.bind(this)
  this.twoClick = this.twoClick.bind(this)
  this.threeClick = this.threeClick.bind(this)

  }

  oneClick = () => {
    this.setState((numero) => ({
      click1: numero.click1 + 1
    }))
    console.log(`The current color is ${this.changeColor(this.state.click1)}`)
  }
  twoClick = () => {
    this.setState((numero) => ({
      click2: numero.click2 + 1
    }))
    console.log(`The current color is ${this.changeColor(this.state.click2)}`)
  }
  threeClick = () => {
    this.setState((numero) => ({
      click3: numero.click3 + 1
    }))
    console.log(`The current color is ${this.changeColor(this.state.click3)}`)
  } 
  changeColor = (color) => {
    if(color % 2 === 0 ){ 
    return 'green' 
    }else{
    return 'white'
    }
  }

  render() {


  return(
    <div>
      <button
      style={{ backgroundColor: this.changeColor(this.state.click1) }}
      onClick={this.oneClick}>{this.state.click1}</button>
      <button
      style={{ backgroundColor: this.changeColor(this.state.click2) }} 
      onClick={this.twoClick}>{this.state.click2}</button>
      <button 
      style={{ backgroundColor: this.changeColor(this.state.click3) }} 
      onClick={this.threeClick}>{this.state.click3}</button>
    </div>
    )
  }
}

export default App;