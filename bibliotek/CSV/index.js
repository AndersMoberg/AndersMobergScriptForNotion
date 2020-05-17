const fs = require('fs').promises;

exports.readFile = function(path) {
    return fs.readFile(path).then(function(buffer) {
        const parse = require('csv-parse/lib/sync');
        return parse(buffer, { columns: true, relax_column_count: true, trim: true });
    }).catch(function(error){
        console.error("Error reading " + path);
        console.error(error);
    });
}

function newPath(oldpath) {
    const parsedPath = require('path').parse(oldpath);

    let date = new Date().toISOString();
    date = date.replace(/T/, ' ');
    date = date.replace(/\..+/, '');
    date = date.replace(" ", "_");
    date = date.replace(":", "");
    date = date.replace(":", "");
    
    return parsedPath.name + "_" + date + parsedPath.ext;
}

exports.saveFile = function(path, object) {
    return new Promise( function (resolve, reject) {
        const result = require('csv-stringify/lib/sync')(object, { header: true });
        const finalpath = newPath(path);
        console.log("saved to " + finalpath);
        return fs.writeFile(finalpath, result);
    });
}