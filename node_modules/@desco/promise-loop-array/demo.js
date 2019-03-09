const promiseLoopArray = require('./')

const values = [ [ 1, 6, ], [ 2, 7, ], [ 3, 8, ], [ 4, 9, ], [ 5, 10, ], ]
const method = (val, index) => {
    values[index] = (val[0] + val[1]) * 2

    return Promise.resolve(values[index])
}

promiseLoopArray(values, method).then(result => {
    console.log(result)
    console.log(values)
})