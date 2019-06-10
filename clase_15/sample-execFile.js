const execFile = require('child_process').execFile
const program = 'node'
const param = '--version'
const result = execFile(program, [param], (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
});