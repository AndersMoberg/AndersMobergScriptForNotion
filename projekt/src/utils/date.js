exports.getSensibleDateString = function(dateObject){
    let date = dateObject.toISOString();
    date = date.replace(/T/, ' ');
    date = date.replace(/\..+/, '');
    return date;
}