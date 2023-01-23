const { exec } = require('child_process');

module.exports = {
  // create & migrate database
  createDatabase: () => {
    return new Promise((res, _rej) => {
      exec('NODE_ENV=test npm run db:create && NODE_ENV=test npm run db:migrate', (err, stdout, stderr) => {
        //err code 1 = database already exist
        if (err && err.code !== 1) console.warn(err);

        let output = stdout ? stdout : stderr
        res(output)
      })
    })
  }
}