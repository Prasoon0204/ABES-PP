const http = require("http");
const fsPromises = require("fs/promises")
const PORT = 1200;

const getData = async () => {
    const resp = await fetch("https://dummyjson.com/products");
    const data = await resp.json();
    return data.products;
};

const getproductsHTMLCode = (products) => {
    let result = "";
    products.forEach(({title, price}) => {
        result += `
            <div class='card'>
                <h4>${title}</h4>
                <p>${price}</p>
            </div>
        `;
    });
    return result;
}

const server = http.createServer(async(req,res) => {
    console.log("-------- request received --------");
    // console.log(Object.keys(req));
    console.log(req.url);

    res.setHeader("content-type","text/html");
    res.setHeader("my-name","Prasoon");

    const resp = await fsPromises.readFile("./pages/homePage.html", {
        encoding:"utf-8"
    });

    const products = await getData();
    const productsHTMLCode = getproductsHTMLCode(products);
    const newPage = resp.replace("__PRODUCTS__",productsHTMLCode)
    res.end(newPage);
});

server.listen(PORT, () => {
    console.log(`-------- Server is Running on PORT ${PORT} --------`);
    console.log(`-------- http://localhost:${PORT} --------`);
});