const spawn = require('child_process').spawn
const command = 'git'
const param = 'branch'
const result = spawn(command, [param])

result.stdout.on('data', (data) => {
    console.log(`stdout from ${command} ${param}:\r\n ${data}`)
})
