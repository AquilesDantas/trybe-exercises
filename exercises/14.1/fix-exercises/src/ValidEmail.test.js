import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

describe('Testa a validação do e-mail', () => {
    test('Testando um componente, caso o email seja válido.', () => {
        const EMAIL_USER = 'email@email.com';
        render(<ValidEmail email={ EMAIL_USER } />);
        const isValid = screen.getByText('Email Válido');
        expect(isValid).toBeInTheDocument();
      });
      test('Testando se caso o input do email esteja vazio, a validação não é exibida.', () => {
          const EMAIL_USER = '';
          render(<ValidEmail email={ EMAIL_USER } />);
          const isValid = screen.getByText('Valor:');
          expect(isValid).toBeInTheDocument();
        });
        test('Testando se o componente possui texto verde ao ser digitado um email válido.', () => {
          const EMAIL_USER = 'email@email.com';
        
          render(<ValidEmail email={EMAIL_USER} />);
          const isValidText = screen.getByTestId('id-is-email-valid');
          expect(isValidText).toHaveAttribute('class', 'green-text');
        });
        
        test('Testando se o componente possui texto vermelho ao ser digitado um email inválido.', () => {
          const EMAIL_USER = 'emailerrado';
        
          render(<ValidEmail email={EMAIL_USER} />);
          const isValidText = screen.getByTestId('id-is-email-valid');
          expect(isValidText).toHaveAttribute('class', 'red-text');
        });
      
})
