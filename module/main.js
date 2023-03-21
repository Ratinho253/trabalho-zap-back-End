/********************************************************************************
 * Objetivo: Arquivo para desenvolver  uma API
 * Autor: João Victor Da Silva
 * Data: 21/03/2023
 * Versão: 1.0
 *********************************************************************************/

var contatosJson = require('../contatos.js')

function getContatos(contato) {

    let arrayContatos = contato
    let contatoArray = []
    let contatosJSON = false;

    contatosJson.contatos['whats-users'].forEach(function (numero) {

        if (numero.number == arrayContatos) {
            numero.contacts.forEach(function (contato) {
                contatoArray.push(contato)
            })
        } 
    })

    if(arrayContatos.length > 0){
        contatosJSON = {}
        contatosJSON.contatos = contatoArray
    }

    return contatosJSON

}
console.log('-------------------------------------------------------------------------------------------------------------------------');
console.log(getContatos('11955577796'));