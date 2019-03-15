const readline = require('readline')

const promiseLoopArray = require('@desco/promise-loop-array')

const userInput = (_questions, _treatment) => {
    const questions = Object.values(_questions)
    const names = Object.keys(_questions)
    const treatment = _treatment ? _treatment : () => Promise.resolve()

    return promiseLoopArray(questions, (question, index) => {
        return new Promise((resolve, reject) => {
            const Interface = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            })

            Interface.question(`${question} `, answer => {
                return treatment(names[index], answer)
                    .then(() => {
                        resolve({ name: names[index], answer, })

                        Interface.close()
                    })
                    .catch(data => {
                        console.log(data.message)

                        Interface.close()

                        if (data.type === 'repeat') {
                            reject({ result: question, type: data.type, })
                        }
                        else {
                            reject({ result: { name: names[index], answer, }, type: data.type, })
                        }
                    })
            })
        })
    }).then(responses => {
        const toReturn = {}

        responses.map(response => {
            toReturn[response.name] = response.answer
        })

        return Promise.resolve(toReturn)
    })
}

module.exports = userInput