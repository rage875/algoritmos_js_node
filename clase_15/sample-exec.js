const exec = require('child_process').exec
const command = 'git branch'
const result = exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
});