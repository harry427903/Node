const fs = require('fs');
const http = require('http');
const url = require('url');

// const { Http2ServerRequest } = require('http2');
// // fs is return the object for which we can use several methods
// const textIN = fs.readFileSync('./txt/input.txt','utf-8');
// //fs.operation('pathOfTheFile','character ending refuer)
// console.log(textIN);

// const textOut =   `Tghis is what we know about the avocado: ${textIN}. \n Created on ${Date.now()}`
// fs.writeFileSync('./txt/output.txt',textOut);

// NOn blocking asynchronous 


// fs.readFile('./txt/start.txt', 'utf-8', (err,data1) => {
//     fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2) =>{
//         console.log(data2);
//         fs.readFile('./txt/append.txt','utf-8',(err,data3) => {
//             console.log(data3);
//             fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8',err => {
//                 console.log('YOUr file HAS BEEN WRITTEN');
//             })
//         });
//     });
// });


const server = http.createServer((req,res)=>{
    
      const pathName = req.url;

    if(pathName == '/overview' || pathName === '/overview'){
        res.end("Thisis the OVERVIEW");
    }else if (pathName === '/api'){
        fs.readFile(`${__dirname}/dev-data/data.json`,'utf-8',(err,data) => {
            const productData = JSON.parse(data);
            res.writeHead(200, {'Content-type':'application/json'})
            
            res.end(data);
        })
        
    }else{
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header':'hello-world'
        });
        res.end('<h1>Page not found</h1>');
    }
   
});

server.listen(3000,'127.0.0.1', () => {
console.log("listening to request on port 3000");
});
 