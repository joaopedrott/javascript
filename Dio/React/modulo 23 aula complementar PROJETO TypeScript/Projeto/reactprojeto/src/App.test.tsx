
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import gitApi from './api/github';    
import { Await } from 'react-router-dom';

describe('App', ()=>{
  let user= ''

  it('Deve receber os dados na resposta, caso o usuario exista', async ()=>{
    user = 'joao'
    render(<App/>)
    jest.spyOn(gitApi, 'getUser')
    const input = screen.getByRole('textbox', {name: 'User'})
    const button = screen.getByRole('button', { name: 'Entrar'});

    fireEvent.change(input, {
        target: {value: user},
    });
    fireEvent.click(button);

    expect(gitApi.getUser).toHaveBeenCalled()

    const response = await gitApi.getUser(user)
    expect(response).toHaveProperty('login')
  })

  it('Nao deve receber dados na resposta, caso  o usuario nao exista', async ()=>{
    user = 'joao-non'
    render(<App/>)
    jest.spyOn(gitApi, 'getUser')
    const input = screen.getByRole('textbox', {name: 'User'})
    const button = screen.getByRole('button', { name: 'Entrar'});

    fireEvent.change(input, {
        target: {value: user},
    });
    fireEvent.click(button);

    const response = await gitApi.getUser(user)
    expect(response).toBe(undefined)
  })
})
