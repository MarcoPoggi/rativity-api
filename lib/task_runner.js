require("dotenv").config()
const fs = require("fs")
const path = require("path")
const task_file_name = process.env.npm_config_task || process.env.npm_config_t //--task || --t

if (process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'test') {
  try {
    if (task_file_name) {
      require(`./tasks/${task_file_name}`) || require(`./tasks/${task_file_name}.js`)
    }
    else {
      fs.readdir(`${__dirname}/tasks`, { withFileTypes: true }, (_e, files) => {
        let file_paths = files.map((file) => `${__dirname}/tasks/${file.name}`).filter((path_file) => path.extname(path_file) == '.js')
        file_paths.forEach((file_path) => require(file_path))
      })
    }
  } catch (e) {
    console.error(`task runner error: ${e.message}`)
  }
}
else {
  console.error("task runner error: task runner can't be executed in a production enviroment")
}