const readline = require('readline')

const promiseLoopArray = require('@desco/promise-loop-array')

const userInput = _questions => {
    const questions = Object.values(_questions)
    const names = Object.keys(_questions)

    return promiseLoopArray(questions, (question, index) => {
        return new Promise(resolve => {
            const Interface = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            })

            Interface.question(`${question} `, answer => {
                resolve({ name: names[index], answer, })

                Interface.close()
            })
        })
    }).then(responses => {
        const toReturn = { ..._questions, }

        responses.map(response => {
            toReturn[response.name] = response.answer
        })

        return Promise.resolve(toReturn)
    })
}

module.exports = userInput