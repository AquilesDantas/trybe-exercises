import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Testando aplicação', () => {
  test('Testa se existe o input de e-mail', () => {
    render(<App/>);

  const inputEmail = screen.getByLabelText("Email")

  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe("email");
  });

  test('Testa se existe dois botões', () => {
    render(<App/>);
    
    const bts = screen.getAllByRole('button')
  
    expect(bts).toHaveLength(2);
    });

  test('Testa se existe o botão "Enviar"', () => {
    render(<App/>);
    
    const btEnviar = screen.getByRole('button', {  name: /enviar/i})
  
    expect(btEnviar).toBeInTheDocument();
    expect(btEnviar.type).toBe("button");
    });

    test('Testa se a clicar no botão "Enviar" o conteúdo do input é renderizado na tela', () => {
      render(<App/>);

      const inputEmail = screen.getByLabelText("Email")
      const btEnviar = screen.getByRole('button', {  name: /enviar/i})
      const heading = screen.getByRole('heading', {  name: /valor:/i})

      userEvent.type(inputEmail, "test@test.com")
      userEvent.click(btEnviar)
    
      expect(inputEmail).toHaveValue("");
      expect(heading).toHaveTextContent(/valor: test@test.com/i);
      });
})

// --------------------------------------------------------------------------

// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('Verificando se existe o campo Email.', () => {
//   render(<App />);
//   const inputEmail = screen.getByLabelText('Email');
//   expect(inputEmail).toBeInTheDocument();
//   expect(inputEmail).toHaveProperty('type', 'email');
// });
// // test('Verificando se existe um botão', () => {
// //   render(<App />);
// //   const btn = screen.getByRole('button');
// //   expect(btn).toBeInTheDocument();
// // });
// test('Verificando se existe dois botões', () => {
//   render(<App />);
//   const buttons = screen.getAllByRole('button');
//   expect(buttons).toHaveLength(2);
// });
// test('Verificando se existe um botão de enviar', () => {
//   render(<App />);
//   const btnSend = screen.getByTestId('id-send');
//   expect(btnSend).toBeInTheDocument();
//   expect(btnSend).toHaveProperty('type', 'button');
//   expect(btnSend).toHaveValue('Enviar');
// });