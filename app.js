/********************************************************************************
 * Objetivo: Desenvolver  uma API para o front-end usar
 * Autor: João Victor Da Silva
 * Data: 21/03/2023
 * Versão: 1.0
 *********************************************************************************/

// impot das dependencia do projeto
const express = require('express')
// dependencia para criar as requisições da API
const cors = require('cors')
// dependencia para gerenciar o corpo das requisições da API
const bodyParser = require('body-parser')
// import do arquivo modulo (funções)
const telefoneContatos = require('./module/main.js')
const { contatos } = require('./contatos')


const app = express()

app.use((request, response, next) => {

    response.header('Access-Control-Allow-Origin', '*')

    response.header('Access-Crontrol-Allow-Methods',' GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())

    next()
})

app.get('/v1/whatsapp/contatos/:telefone', cors(), async function(request, response, next){

    let statusCode
    let dadosContatos = {}

    let filtroTelefone =request.params.telefone

    if (filtroTelefone == undefined || filtroTelefone == '' || isNaN(filtroTelefone) || filtroTelefone == null || filtroTelefone.length < 11) {
        statusCode = 400
        dadosContatos.message = 'Não foi possivel processar pois os dados de entrada (telefone) que foi enviado não corresponde, confira o valor,  pois não pode ser vazio.'
    }else {

        let contatos = telefoneContatos.getContatos(filtroTelefone)


        if (contatos) {
            statusCode = 200
            dadosContatos = contatos
        }else {
            statusCode = 404
        }
    }
    response.status(statusCode)
    response.json(dadosContatos)
})

app.listen(8080, function () {
    console.log('Servidor aguardando requisições na porta 8080');
})