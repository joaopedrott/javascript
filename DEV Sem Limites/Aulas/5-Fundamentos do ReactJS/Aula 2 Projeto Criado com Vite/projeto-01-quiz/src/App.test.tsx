import { fireEvent, render, screen } from '@testing-library/react';

import { Quiz } from './components/Quiz';

describe('Quiz Component', () => {
  it('should start the quiz in the first question', () => {
     render(<Quiz />)//simula o componente sendo renderizado

    expect(screen.getByRole('heading')).toHaveTextContent('Qual é a capital do Brasil?') //verifica se o titulo da pergunta está sendo renderizado

    expect(screen.queryByText('Proxima Pergunta')).not.toBeInTheDocument() //verifica se o texto da proxima pergunta está sendo renderizado



  })

  it('should answer any question', () => {
    render(<Quiz />)

    fireEvent.click(screen.getByText('Sao Paulo')) //simula o click no botao de resposta

    expect(screen.getByText('Proxima Pergunta')).toBeInTheDocument() //verifica se o texto da proxima pergunta está sendo renderizado

  })

  it('should mark the quesiton as correct', () => {
    render(<Quiz />)

    fireEvent.click(screen.getByText('Brasilia'))

    expect(screen.getByText('Resposta Correta')).toBeInTheDocument()
    expect(screen.queryByText('Resposta Incorreta')).not.toBeInTheDocument()
  })
  
  it('should mark the quesiton as incorrect', () => {
    render(<Quiz />)

    fireEvent.click(screen.getByText('Sao Paulo'))

    expect(screen.getByText('Resposta Incorreta')).toBeInTheDocument()
    expect(screen.queryByText('Resposta Correta')).not.toBeInTheDocument()
  })  

  it('should not answer the same question twice', () => {
    render(<Quiz />)

    expect(screen.getByText('Sao Paulo').closest('button')).not.toBeDisabled()
    expect(screen.getByText('Rio de Janeiro').closest('button')).not.toBeDisabled()
    expect(screen.getByText('Brasilia').closest('button')).not.toBeDisabled()
    expect(screen.getByText('Salvador').closest('button')).not.toBeDisabled()


    fireEvent.click(screen.getByText('Brasilia'))

    expect(screen.getByText('Sao Paulo').closest('button')).toBeDisabled()
    expect(screen.getByText('Rio de Janeiro').closest('button')).toBeDisabled()
    expect(screen.getByText('Brasilia').closest('button')).toBeDisabled()
    expect(screen.getByText('Salvador').closest('button')).toBeDisabled()

  })

  it('should go to the next question', () => {
    render(<Quiz />)

    expect(screen.getByRole('heading')).toHaveTextContent('Qual é a capital do Brasil?') //verifica se o titulo da pergunta está sendo renderizado

    fireEvent.click(screen.getByText('Brasilia'))

    fireEvent.click(screen.getByText('Proxima Pergunta'))

    expect(screen.getByRole('heading')).toHaveTextContent('Quantos planetas existem no sistema solar?') //verifica se o titulo da pergunta está sendo renderizado

  })

  it('should show the result of the quiz', () => {
    render(<Quiz />)

    fireEvent.click(screen.getByText('Brasilia'))
    fireEvent.click(screen.getByText('Proxima Pergunta'))

    fireEvent.click(screen.getByText('8'))
    fireEvent.click(screen.getByText('Proxima Pergunta'))

    fireEvent.click(screen.getByText('Leonardo da Vinci'))
    fireEvent.click(screen.getByText('Proxima Pergunta'))

    fireEvent.click(screen.getByText('O'))
    fireEvent.click(screen.getByText('Ver Resultado'))

    expect(screen.getByText('Resultado')).toBeInTheDocument()

    expect(screen.getByText('Voce acertou 4 de 4 perguntas!')).toBeInTheDocument()

  })

  it('should restart the quiz', () => {
    render(<Quiz />)
    fireEvent.click(screen.getByText('Brasilia'))
    fireEvent.click(screen.getByText('Proxima Pergunta'))

    fireEvent.click(screen.getByText('8'))
    fireEvent.click(screen.getByText('Proxima Pergunta'))

    fireEvent.click(screen.getByText('Leonardo da Vinci'))
    fireEvent.click(screen.getByText('Proxima Pergunta'))

    fireEvent.click(screen.getByText('O'))
    fireEvent.click(screen.getByText('Ver Resultado'))

    expect(screen.getByText('Resultado')).toBeInTheDocument()

    expect(screen.getByText('Voce acertou 4 de 4 perguntas!')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Tente Novamente'))

    expect(screen.getByRole('heading')).toHaveTextContent('Qual é a capital do Brasil?')

  })



})