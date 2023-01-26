const { exec } = require('child_process');

(() => {
  exec('NODE_ENV=test npm run db:create && NODE_ENV=test npm run db:migrate', (err, stdout, stderr) => {
    //err code 1 = database already exist
    if (err && err.code !== 1) return console.warn(err);

    let output = stdout ? stdout : stderr
    console.log(output)
  })
})()