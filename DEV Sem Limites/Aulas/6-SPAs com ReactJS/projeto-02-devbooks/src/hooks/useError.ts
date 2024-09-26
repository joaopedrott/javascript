import { useState } from 'react'
import { isAxiosError } from 'axios'

interface UseError {
  error: string | null
  handleError: (error: unknown) => void
  clearError: () => void
}

export function useError(): UseError {
  const [error, setError] = useState<string | null>(null)

  const handleError = (error: unknown) => {
    if (
      isAxiosError(error) &&
      error.response?.status === 401 &&
      error.response.data.message === 'Invalid credentials'
    ) {
      setError('E-mail e senha incorretos')
    } else if (
      isAxiosError(error) &&
      error.response?.status === 401 &&
      error.response.data.message === 'Invalid password'
    ) {
      setError('Senha incorreta')
    } else {
      setError(
        'Algo deu errado ao processa a sua requisicao, tente novamente mais tarde'
      )
    }
  }

  const clearError = () => {
    setError(null)
  }

  return {
    error,
    handleError,
    clearError
  }
}
