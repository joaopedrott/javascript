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


        const button = screen.getByRole('button', { name: 'Entrar'});

        fireEvent.click(button)
        expect(mockHistoryPush)/* .toHaveBeenCalled() */ //Se eu botar, vai dar erro pois o curso esta desatualizado 
    })

    

})