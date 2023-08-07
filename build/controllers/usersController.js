"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const database_1 = require("../database");
class UsersController {
    criarUsuario(request, response) {
        const { name } = request.body;
        if (name.length < 1) {
            return response.status(403).json({ mensagem: 'Não é possivel criar usuários sem um nome' });
        }
        database_1.database.push(name);
        return response.status(201).json({ 'mensagem': `Usuário ${name} criado` });
    }
    listarUsuario(request, response) {
        return response.status(200).json(database_1.database);
    }
}
exports.UsersController = UsersController;
