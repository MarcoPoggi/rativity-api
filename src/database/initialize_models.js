const fs = require("fs")
const path = require("path")
const modelsPath = `${__dirname}/../models`

const capitalizeFileName = (string) => {
    let modelName = "";
    string.split("_").forEach((word) => {
        modelName += word[0].toUpperCase() + word.slice(1);
    })
    return modelName;
}


fs.readdir(modelsPath, { withFileTypes: true }, (_error, files) => {
    let file_paths = files.map((file) => `${modelsPath}/${file.name}`).filter((path_file) => path.extname(path_file) == '.js')
    file_paths.forEach((file_path) => {
        let file_name = capitalizeFileName(path.parse(file_path).name);
        let model = require(file_path)[file_name]
        model.sync()
    });
})