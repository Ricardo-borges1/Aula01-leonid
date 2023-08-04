'use strict'

//3 - var  -> mutável -> Global
//2 - let  -> mutável  -> bloco
//1 - const  -> Imutável -> bloco


function trocarTitulo () {

const titulo = document.getElementById ('titulo')
const tituloDigitado = prompt ('Digite um titulo')

if (tituloDigitado == ''){    
titulo.textContent = 'SENAI'
} else {
    titulo.textContent = tituloDigitado
    titulo.classList.add('verde')
}



}

const botaoTrocarTitulo = document.getElementById ('trocar-titulo')
botaoTrocarTitulo.addEventListener('click', trocarTitulo)





function trocarNome () {

    const nome = document.getElementById ('nome')
    const nomeDigitado = prompt ('Digite seu nome')

    if (nomeDigitado == ''){
        nome.textContent = 'coloque seu nome'
    } else {
        nome.textContent = nomeDigitado
        nome.classList.add('')
    }



}

const BotaoDigiteNome = document.getElementById ('cadastrar')
BotaoDigiteNome.addEventListener('click', trocarNome)


