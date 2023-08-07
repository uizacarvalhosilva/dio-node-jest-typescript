import { Request, Response } from 'express'
import express from 'express';


const server = express();
server.use(express.json())



server.listen(5000, () => {
    console.log('Servidor online na porta 5000')
})