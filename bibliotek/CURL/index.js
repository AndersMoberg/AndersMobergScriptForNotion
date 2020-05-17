const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function isValidUrl(string) {
    try {
      new URL(string);
    } catch (_) {
      return false;  
    }
    return true;
}

function getJSDOMfromURL(url){
  return new Promise(function(resolve,reject){
    const virtualConsole = new jsdom.VirtualConsole();
    virtualConsole.on("error", () => {});
    virtualConsole.on("warn", () => {});
    virtualConsole.on("info", () => {});
    virtualConsole.on("dir", () => {});
    resolve(JSDOM.fromURL(url, {runScripts: "outside-only", virtualConsole, pretendToBeVisual: true}));
  });
}

function getTitlePromise(url) {
  return new Promise(function(resolve, reject) {
    try {
      new URL(string);
    } catch (_) {
      reject(false);  
    }
    resolve(true);
  }).catch(() => { return null });
}

exports.getTitleFromURL = async function(url) {
    try {
        const virtualConsole = new jsdom.VirtualConsole();
        virtualConsole.on("error", () => {});
        virtualConsole.on("warn", () => {});
        virtualConsole.on("info", () => {});
        virtualConsole.on("dir", () => {});
        const root = await JSDOM.fromURL(url, {runScripts: "outside-only", virtualConsole, pretendToBeVisual: true});
        const title = root.window.document.querySelector("title");
        return title.textContent;
    } catch (error) {
        return "";
    }
}