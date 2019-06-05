const fs = require('fs')
let userInput = process.argv[2]
let filepath = "static/" + userInput
console.log("Looking for file:", filepath)
fs.access(filepath, fs.constants.F_OK, function (err) {

    if (!err) {
        fs.open(filepath,'r', function (err, fileDescriptor){

            if(!err){
                console.log("file descriptor: ", fileDescriptor)
                fs.readFile(filepath,'utf-8', function(err, fileContent){

                    if(!err){
                        console.log(userInput, " content:")
                        console.log(fileContent)
                    } else {
                        console.log("file couldn't be read")
                        throw err
                    }

                })
            } else{
                console.log("file couldn't be opened")
                throw err
            }
        })
    } else {
        console.log("file doesn't exist")
        throw err
    }
})
