const http = require('http');
let dateTime = import("./datetime_et.js");

http.createServer(function(req, res){    //req >> request; res >> result

    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Vendt, web.23</title></head><body>');
    res.write('<h1>Taavi Vendt</h1><p>Web valmis <a href="https://www.tlu.ee"target="_blank">TLÜ</a> DTI Informaatika eriala õppetöö raames!</p>');
    res.write('<hr></body></html>');
    res.write('<p>Praegu on </p>');
    res.write('<p id="time"></p>');
    res.write('<script type="module" src="./datetime_et.js"></script>');
    console.log('keegi vaatab');

    //valmis, saada ara
    return res.end();
}

).listen(5126);    //port 5126 (5100 >> yldport; 26 >> arvuti nr mille kohal istun)

//taaendt   5126
//kaivita programm terminalis greeny.cs.tlu.ee serveris
//GO TO greeny.cs.tlu.ee:5126