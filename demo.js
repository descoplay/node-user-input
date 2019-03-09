const userInput = require('./')

const perguntas = {
    nome: 'Qual é o seu nome?',
    idade: 'Qual é a sua idade?',
    signo: 'Qual é o seu signo?',
}

userInput(perguntas).then(respostas => {
    console.log(respostas.nome)
    console.log(respostas.idade)
    console.log(respostas.signo)
})