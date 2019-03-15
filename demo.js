const userInput = require('./')

const perguntas = {
    nome: 'Qual é o seu nome?',
    idade: 'Qual é a sua idade?',
    signo: 'Qual é o seu signo?',
}

const tratamentoDeResposta = (nomePergunta, resposta) => {
    switch (nomePergunta) {
        case 'idade': {
            if (parseInt(resposta) < 18) {
                return Promise.reject({
                    message: 'Idade não pode ser menor que 18',
                    type: 'break',
                })
            }
        }
            break
        case 'signo': {
            if ([ 'Câncer', 'Capricórneo', 'Libra', 'Gêmeos', ].indexOf(resposta) === -1) {
                return Promise.reject({
                    message: 'Signo inválido',
                    type: 'repeat',
                })
            }
        }
    }

    return Promise.resolve()
}

userInput(perguntas, tratamentoDeResposta).then(respostas => {
    console.log(respostas)
})