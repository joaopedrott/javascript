import axios from 'axios';
import gitApi from "./github";

jest.mock('axios');
const axiosMock = axios as jest.Mocked<typeof axios>

describe('github',()=>{

    it('Deve retornar login e id do usuario', async ()=>{
        axiosMock.get = jest.fn().mockResolvedValue({ data: {
            login: 'joao',
            id: '123456'
        }})

        const response = await gitApi.getUser('joao')
        expect(response).toMatchObject({
            login: 'joao',
            id: '123456'
        })
    })

    it('Deve retornar a mensagem de usuario nao encontrado', async ()=>{
        axiosMock.get = jest.fn().mockResolvedValue({data: {
            message: 'Not found'
        }})

        const response = await gitApi.getUser('usuario-invalido')
        expect(response.toMatchObject({message: 'Not found'}))
    })
})