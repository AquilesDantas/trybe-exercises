import React, { Component } from 'react';
import ValidEmail from './ValidEmail';

class App extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      saveEmail: '',
    };
  }

  changeEmail(value) {
    this.setState({email: value})
  };

  changeSaveEmail(value) {
    console.log(value);
    this.setState({saveEmail: value, email: '' });
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div>
        <label htmlFor="idt">
          Email
          <input
          id="idt"
          value={ email }
          type="email"
          onChange={(e) => this.changeEmail(e.target.value)}
          />
        </label>
        <input
          id="bte"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={() => this.changeSaveEmail(email)}
        />
        <input id="bt-id" type="button" value="Voltar"/>
        <ValidEmail email={ saveEmail } />
      </div>
    );
  }
}

export default App

// ---------------------------------------------------------------------------

// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <label htmlFor="id-email">
//         Email
//         <input id="id-email" type="email" />
//       </label>
//       <input id="btn-send" type="button" data-testid="id-send" value="Enviar" />
//       <input id="btn-back" type="button" value="Voltar" />
//     </div>
//   );
// }

// export default App;