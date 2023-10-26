const express = require('express');

const app = express();

const { productsRouter } = require('./routes/products.routes');

const port = 3000;

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.use('/products', productsRouter);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  return console.log(`Express is listening at http://localhost:${port}`);
});
