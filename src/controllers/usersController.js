import { database } from '../database.js'

const usersController = {
    criarUsuario (request, response){
        const { name } = request.body

        if(name.length < 1){
            return response.status.apply(403).json({mensagem: 'Não é possivel criar usuários sem um nome'})
        }
        database.push(name)
        return response.status(201).json({'mensagem': `Usuário ${name} criado`})
    },

    listarUsuario(request, response){
        return response.status(200).json(database)
    }
}

export { usersController }