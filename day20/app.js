const http = require("http");
const { saveObjInFile } = require("./fileHelper");

const port = 2100;

const server = http.createServer((req, res)=>{
   const {url, method} = req;
   const [path, queryStr] = url.split('?');
   if(path === '/products' && method == 'GET'){
    const queryItems = queryStr.split("&");
    const queryKeyVals = queryItems.map((str) => str.split("="));
    const obj =  Object.fromEntries(queryKeyVals);
    saveObjInFile(obj);
    res.end(
        JSON.stringify({
            status: "success",
            message: "Product added",
        })
    )
   }
});

server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})