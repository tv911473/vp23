const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const dateTime = require('./datetime_et');
const semesTer = require('./semesterprog');
const pageHead = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Vendt, web.23</title></head></html>';
const pageBanner = '<img src="banner.png" alt="Kursuse banner">';
const pageBody = '\n\t<h1>Taavi Vendt</h1><p>Web valmis <a href="https://www.tlu.ee"target="_blank">TLÜ</a> DTI Informaatika eriala õppetöö raames!</p>';
const pageFoot = '\n\t<hr></body></html>';
const tluPic = '\n\t<img src="tlu_36.jpg" alt="Kooli pilt">';

http.createServer(function(req, res){    // req >> request; res >> result
    let currentURL = url.parse(req.url, true);
    console.log(currentURL);

        //  Pealeht
    if (currentURL.pathname === '/'){
        res.writeHead(200, {'Content-type': 'text/html'});  // 200 - all good
        res.write(pageHead);
        res.write(pageBanner);
        res.write(pageBody);
        res.write('<hr><p>Lehe avamisel oli kell ' + dateTime.timeOfToday() + '. Praegu on ' + dateTime.timeOfDay() + '</p>');
        res.write('<p>Täna on ' + dateTime.dateOfToday() + ', ' + dateTime.dayOfToday() + '</p>');
        res.write(pageFoot);
        res.write('\n\t<p><a href="semesterprogress">Infot 2023 sügissemestri kohta</a></p>');
        res.write('<p><a href="picture">Pilt Tallinna Ülikoolist</a></p>');
        //console.log('keegi vaatab');
        return res.end();

    }   //  TLU pildi leht
    else if (currentURL.pathname === '/picture'){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(pageHead);
        res.write(pageBanner);
        res.write(pageBody);
        res.write(tluPic);
        return res.end();

    }   //  Semestri leht
    else if (currentURL.pathname === '/semesterprogress'){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(pageHead);
        res.write(pageBanner);
        res.write(pageBody);
        res.write('<p>' + semesTer.output + '</p>');
        res.write(pageFoot);
        return res.end();

    }   //  Banneri sihtkoht
    else if (currentURL.pathname === '/banner.png'){
        console.log('Tahame bannerit!');
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

    }   //  TLU pildi sihtkoht
    else if (currentURL.pathname === '/tlu_36.jpg'){
        console.log('Tahame koolist pilti!');
        let tluPath = path.join(__dirname, 'public', 'tluphotos');
        fs.readFile(tluPath + currentURL.pathname, (err, data)=>{
            if (err){
                throw err;
            }
            else {
                res.writeHead(200, {'Content-type': 'image/jpg'});
                res.end(data);
            }
        });
    }   //  ERROR
    else {
        res.end('ERROR 404');
    }
    //valmis, saada ara
}).listen(5126);    //port 5126 (5100 >> yldport; 26 >> arvuti nr mille kohal istun)

//taaendt   5126
//kaivita programm terminalis greeny.cs.tlu.ee serveris
//GO TO greeny.cs.tlu.ee:5126