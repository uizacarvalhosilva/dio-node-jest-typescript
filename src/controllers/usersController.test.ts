// describe('Users Controller', () => {
//     it('Deve somar 1 + 1', () => {
//         function soma(a : number, b: number){
//             return a + b
//         }
//         const resultado = soma(1,2)
//         expect(resultado).toBe(3)
//     })
// })
import { Request } from 'express'
import { makeMockResponse } from '../mocks/mockResponse';
import { UsersController } from "./usersController";

describe('Users Controller', () => {
    const usersController = new UsersController();

    const mockRequest = {} as Request
    const mockResponse = makeMockResponse()

    it('Deve listar os nossos usuáios', () => {
        usersController.listarUsuario(mockRequest, mockResponse)
        //eu esporo que no meu mockResponse tenha o state, no caos o estado do status como 200
        expect(mockResponse.state.status).toBe(200)

        //o json atualmente retorna somente o database, onde temos os usuários, para testar vamos comparar com o tamanho do array
        expect(mockResponse.state.json).toHaveLength(3)
    })

    it('Deve criar um novo usuário', () => {
        mockRequest.body ={
            name: 'Novo Usuário'
        }

        usersController.criarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({'mensagem': `Usuário Novo Usuário criado`})
    })

    it('Não deve criar um usuário com o nome em branco', ()=>{
        mockRequest.body = {
            name: ''
        }
        usersController.criarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(403)
        expect(mockResponse.state.json).toMatchObject({mensagem: 'Não é possivel criar usuários sem um nome'})
    })
})