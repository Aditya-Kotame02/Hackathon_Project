function createResult(err, data){
    const result = {}
    if(data){
        console.log(data)
        result.status = 'success'
        result.data = data
    }
    else{
        result.status = 'Not Found'
        result.err = err
    }
    return result
}

module.exports = {createResult}