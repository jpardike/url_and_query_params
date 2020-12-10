const { response, request } = require('express');
const express = require('express');
const app = express();

app.get('/products/allproducts', (request, response) => {
    response.send('These are all the products');
});

app.get('/products/:productName', (request, response) => {
    console.log(request.params);

    response.send(`this product is the: ${request.params.productName}`);
});

app.get('/products/:productName/:itemAmount', (request, response) => {
    const productName = request.params.productName;
    const itemAmount = request.params.itemAmount;

    response.send(`you would like to order ${itemAmount} of the product ${productName}`);
});

app.get('*', (request, response) => {
    response.send('Your product was not found');
});

app.listen(3000, () => {
    console.log('your server is running on port: 3000');
});