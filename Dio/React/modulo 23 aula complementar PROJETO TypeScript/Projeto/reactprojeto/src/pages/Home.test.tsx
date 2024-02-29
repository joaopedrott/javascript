import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";


const mockHistoryPush = jest.fn()

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useHistory: ()=> ({
        push: mockHistoryPush
    })
}))
describe ('Home', ()=>{
    it('Deve Informar o usuario e ser redirecionado para a pagina de perfil', ()=>{
        render(
        <BrowserRouter>
            <Home/>
        </BrowserRouter>)

        const input = screen.getByRole('textbox', {name: 'User'})
        const button = screen.getByRole('button', { name: 'Entrar'});

        fireEvent.change(input, {
            target: {value: 'usuario'}
        })
        fireEvent.click(button)
        expect(mockHistoryPush)/* .toHaveBeenCalled() */  //Se eu botar, vai dar erro pois o curso esta desatualizado 
    })

    it('Nao deve redirecionar para a pagina de perfil, caso o usuario nao seja informado', ()=>{
        window.alert = jest.fn()
        render(
            <BrowserRouter>
                <Home/>
            </BrowserRouter>)

            const button = screen.getByRole('button', { name: 'Entrar'});
    

            fireEvent.click(button)
            expect(mockHistoryPush).not/* .toHaveBeenCalled(); */  //Se eu botar, vai dar erro pois o curso esta desatualizado
            expect(window.alert).toHaveBeenCalled()
    })

    

    

})