const csv = require('csv');
const curl = require('curl');


async function processElement(column, element) {
    const url = element[column];
    console.log(await curl.isValidUrl(url));
    const result = await curl.getTitleFromURL(url);
    if(result !== "") {
        console.log("url " + url);
        element[column] = result;
    }
}

async function process(object, columns) {
    object.map(async element => {
        columns.forEach(async function (column) { await processElement(column, element) });
    });
    return object;
}

module.exports = async function(argv) {
    const file = argv.file;
    const columns = argv.columns;

    await csv.readFile(file)
    .then((object) => process(object, columns))
    .then((object) => csv.saveFile(file,object));
}