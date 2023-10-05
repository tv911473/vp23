const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');   //  fs - file system
const dateTime = require('./datetime_et');
const semesTer = require('./semesterprog');
const pageHead = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Vendt, web.23</title></head></html>';
const pageBanner = '<img src="banner.png" alt="Kursuse banner">';
const pageBody = '\n\t<h1>Taavi Vendt</h1><p>Web valmis <a href="https://www.tlu.ee"target="_blank">TLÜ</a> DTI Informaatika eriala õppetöö raames!</p>';
const pageFoot = '\n\t<hr></body></html>';
const querystring = require('querystring');
//const tluPic = '\n\t<img src="public" alt="Kooli pilt">';

http.createServer(function(req, res){    // req >> request; res >> result
    let currentURL = url.parse(req.url, true);
    console.log(currentURL);

    // addname lisa
    if(req.method === 'POST'){
        collectRequestData(req, result=>{

            // kirjutame andmeid tekstifaili
            fs.open('txtfiles/log.txt', 'a', (err, file)=>{       // 'a' kui faili pole siis see luuakse
                if (err){
                    throw err;
                }
                else {
                    fs.appendFile('txtfiles/log.txt', result.firstNameInput + ';', (err)=>{
                        if (err) {
                            throw err;
                        }
                        else {
                            console.log('faili kirjutati')
                        }
                    });
                    fs.close(file, (err)=>{
                        if (err) {
                            throw err;
                        }
                    });
                }
            });
            res.end(result.firstNameInput);
        })

}        //  Pealeht
    else if (currentURL.pathname === '/'){
        res.writeHead(200, {'Content-type': 'text/html'});  // 200 - all good
        res.write(pageHead);
        res.write(pageBanner);
        res.write(pageBody);
        res.write('<hr><p>Lehe avamisel oli kell ' + dateTime.timeOfToday() + '. Praegu on ' + dateTime.timeOfDay() + '</p>');
        res.write('<p>Täna on ' + dateTime.dateOfToday() + ', ' + dateTime.dayOfToday() + '</p>');
        res.write('<hr><p><a href="addname">Lisa oma nimi</a></p>');
        res.write('\n\t<hr><p><a href="semesterprogress">Infot 2023 sügissemestri kohta</a></p>');
        res.write('<p><a href="tluphoto">Pilt Tallinna Ülikoolist</a></p>');
        res.write(pageFoot);
        //console.log('keegi vaatab');
        return res.end();
    }

        //  Lisa oma nimi leht
    else if (currentURL.pathname === "/addname"){
        res.writeHead(200, {"Content-type": "text/html"});
        res.write(pageHead);
        res.write(pageBanner);
        res.write(pageBody);
        res.write('<hr><h2>Lisa palun oma nimi</h2>');
        res.write('<form method="POST"><label for="firstNameInput">Eesnimi: </label><input type="text" name= "firstNameInput" id="firstNameInput" placeholder="Sinu eesnimi ..."><br><label for="lastNameInput">Perekonnanimi: </label><input type="text" name= "lastNameInput" id="lastNameInput" placeholder="Sinu perekonnanimi ..."><br><input type="submit" name="nameSubmit" value="Salvesta"></form>');
        res.write(pageFoot);
        return res.end();
    }

       //  TLU pildi leht
    else if (currentURL.pathname === '/tluphoto'){
        let htmlOutput = '<p>Pilti ei saa naidata!</p>';
        let listOutput = '';
        fs.readdir('public/tluphotos', (err, fileList)=>{
            if(err){
                throw err;
                tluPhotoPage(res, htmlOutput, listOutput);
            }
            else {
                //console.log(fileList)     // kontrolli fileListi fotodest
                let photoNum = Math.floor(Math.random() * fileList.length); // fileList.length - kasutab olemasolevat listi pikkust
                htmlOutput = '<img src="' + fileList[photoNum] + '" alt="TLU pilt">';
                listOutput = '<ul>';
                for (fileName of fileList){
                    listOutput += '<li>' + fileName + '</li>';
                }
                listOutput += '</ul>'
                tluPhotoPage(res, htmlOutput, listOutput);
            }
        });

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

    //else if (currentURL.pathname === '/tlu_36.jpg'){
    else if (path.extname(currentURL.pathname) === ".jpg"){
		console.log(path.extname(currentURL.pathname));
		//let filePath = path.join(__dirname, "public", "tluphotos/tlu_42.jpg");
		let filePath = path.join(__dirname, "public", "tluphotos");
		fs.readFile(filePath + currentURL.pathname, (err, data)=>{
			if(err){
				throw err;
			}
			else {
				res.writeHead(200, {"Content-Type": "image/jpeg"});
				res.end(data);
			}
		});
	} 
    else {
        res.end('ERROR 404');
    }
    //valmis, saada ara
}).listen(5126);    //port 5126 (5100 >> yldport; 26 >> arvuti nr mille kohal istun)

//taaendt   5126
//kaivita programm terminalis greeny.cs.tlu.ee serveris
//GO TO greeny.cs.tlu.ee:5126

function tluPhotoPage(res, htmlOutput, listOutput){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(pageHead);
    res.write(pageBanner);
    res.write(pageBody);
    res.write(htmlOutput);
    if(listOutput != ''){
        res.write(listOutput);
    }
    res.write(pageFoot);
    return res.end();
}

function collectRequestData(request, callback) {
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';
    if(request.headers['content-type'] === FORM_URLENCODED) {
        let receivedData = '';
        request.on('data', chunk => {
            receivedData += chunk.toString();
        });
        request.on('end', () => {
            callback(querystring.decode(receivedData));
        });
    }
    else {
        callback(null);
    }
}