'use strict';

const http = require('http');
const fs = require('fs');

http.get('http://loripsum.net/api/1', (res) => {
    let text = '';
    res.on('data', (chunck) => {
        text += chunck;
    });

    res.on('end', () => {
        fs.writeFile('site.html', text, () => {
            console.log('Arquivo pronto!');
        })
    });
}).on('error', (e) => {
    console.log(`error: ${e.message}`);
});