const fs = require("Fs");
const superagent = require("superagent");

fs.readFile('${__dirname}/dog.txt', (err,data) => {
    console.log('Breed: ${data}');

    superagent.get('https://dog.ceo/apit/breed/${data}/images/random').end(( err,res)=>{
        console.log(res.body);
    });
}); 