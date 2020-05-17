const csv = require('csv');
const sensibleDate = require('./utils/date').getSensibleDateString;

module.exports = async function(argv) {
    const file = argv.file;
    const columns = argv.columns;

    let object = await csv.readFile(file);
    object.map(element => {
        columns.forEach(column => {
            try {
                element[column] = sensibleDate(new Date(element[column]));   
            } catch(e) {}
        });
    });
    await csv.saveFile(file,object);
}