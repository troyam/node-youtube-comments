
const PythonShell = require('python-shell').PythonShell;
const fs = require('fs');

const videoId = "";


let options = {
    mode: 'text',

    pythonOptions: ['-u'],
    args: ['-y', videoId, '-o', './text.txt']
};
let pyshell = new PythonShell('yt.py', options);


var results = [];

pyshell.on('message', async function (message) {
    // received a message sent from the Python script;
    try {
        var com = JSON.parse(message)
        results.push(com)
    } catch (e) {

    }
});

// end the youtube comments download and allow the process to exit
pyshell.end(function (err, code, signal) {

    fs.writeFileSync('./comments.json', JSON.stringify(results), function (data) {

    })

    if (err) throw err;
});
