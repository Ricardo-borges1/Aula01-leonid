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

const cidade = document.getElementById ('titulo')
const cidadeDigitado = prompt ('Digite sua cidade')

if (cidadeDigitado == ''){    
cidade.textContent = 'SENAI'
} else {
    cidade.textContent = cidadeDigitado
    cidade.classList.add('verde')

}




}

const botaoTrocarTitulo = document.getElementById ('cadastrar')
botaoTrocarTitulo.addEventListener('click', trocarTitulo)
