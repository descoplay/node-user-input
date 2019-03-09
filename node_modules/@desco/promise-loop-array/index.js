const promiseLoopArray = (_values, _method) => {
    return loop(_values, _method)
}

const loop = (_values, _method, _index = 0) => {
    const values = [ ..._values, ]
    const value = values.shift()
    const results = []

    return _method(value, _index).then(result => {
        results.push(result)

        if (values.length === 0) {
            return Promise.resolve(results)
        }

        return loop(values, _method, _index + 1).then(result => {
            return Promise.resolve(results.concat(result))
        })
    })
}

module.exports = promiseLoopArray