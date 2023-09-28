const firstName = "Taavi";
const lastName = "Vendt";
const { monthtsET } = require("./datetime_et");
const datetimeValue = require("./datetime_et");
const fs = require("fs");   //file system
//let folkWisdom = "";

fs.readFile("./vanasonad.txt", "utf8", (err, data)=>{
    if(err){
        console.log(err);
    }
    else {
        //console.log(data);
        //folkWisdom = data;
        onScreen(data); //funktsioon kaivitub kohe mitte programmi lopus
    }
});  // readFile loppeb // utf8 >> loe teksti täpitahtedega

const onScreen = function(folkWisdom){
    console.log("Programmi autor on: " + firstName + " " + lastName);
    console.log("Täna on: " + datetimeValue.dayOfToday());
    console.log("Kuupaev: " + datetimeValue.dateOfToday());
    //console.log(folkWisdom);   //kogu vanasonade loend
    let folkWisdomS = folkWisdom.split(";");    //eraldab vanasonad ; koha pealt
    //console.log(folkWisdomS);     //kuvab vanasonad listina
    //console.log(folkWisdomS.length); //kuvab mitu vanasona on listis
    //console.log("Tanane tarkus: " + folkWisdomS[Math.floor(Math.random() * folkWisdomS.length)]);    //Math.floor ymardab alati alla nt 23.7 = 23 // Math.random annab suvalise nr

    //koige tavalisem "for" tsykkel (loop)
    for (let i = 0; i < folkWisdomS.length; i ++){  // i ++ >> liidetakse i'le 1 juurde
        console.log("Vanasona nr " + (i + 1) + ': "' + folkWisdomS[i] + '"');
    }
    console.log("Praegu on: " + datetimeValue.timeOfToday());
    console.log("Hetk: " + datetimeValue.timeOfDay());
    //console.log(datetimeValue.monthtsET);    //kuvab koikide kuude valiku valjundis listina

}
