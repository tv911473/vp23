const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const pageHead = '<!DOCTYPE html>\n<html>\n<head>\n\t<meta charset="utf-8">\n\t<title>Vendt, web.23</title></head><body>';
const pageBanner = '\n\t<img src="banner.png" alt="Kursuse banner">';
const pageBody = '\n\t<h1>Taavi Vendt</h1>\n\t<p>Web valmis <a href="https://www.tlu.ee"target="_blank">TLÜ</a> DTI Informaatika eriala õppetöö raames!</p>';
const pageFoot = '\n\t<hr></body></html>';
http.createServer(function(req, res){    //req >> request; res >> result
    let currentURL = url.parse(req.url, true);
    console.log(currentURL);
    if (currentURL.pathname === '/'){
        res.writeHead(200, {'Content-type': 'text/html'});  // 200 - all good
        res.write(pageHead);
        res.write(pageBanner);
        res.write(pageBody);
        res.write('\n\t<hr>\n\t<p><a href="addname">Lisa oma nimi</a>!</p>')
        res.write(pageFoot);
        //console.log('keegi vaatab');
        return res.end();
    }
    else if (currentURL.pathname === '/addname'){
        res.writeHead(200, {'Content-type': 'text/html'});  // 200 - all good
        res.write(pageHead);
        res.write(pageBanner);
        res.write(pageBody);
        res.write('\n\t<hr>\n\t<<h2>Lisa palun oma nimi</h2>')
        res.write(pageFoot);
        //console.log('keegi vaatab');
        return res.end();
    }
    else if (currentURL.pathname === '/banner.png'){
        //console.log('Tahame pilti!')
        let bannerPath = path.join(__dirname, 'public', 'banner');
        fs.readFile(bannerPath + currentURL.pathname, (err, data)=>{
            if (err){
                throw err;
            }
            else {
                res.writeHead(200, {'Content-type': 'image/png'});
                res.end(data);
            }
        });
    }
    else {
        res.end('ERROR 404')
    }
    //valmis, saada ara
}).listen(5126);    //port 5126 (5100 >> yldport; 26 >> arvuti nr mille kohal istun)

//taaendt   5126
//kaivita programm terminalis greeny.cs.tlu.ee serveris
//GO TO greeny.cs.tlu.ee:5126