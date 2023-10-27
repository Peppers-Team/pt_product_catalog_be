const express = require('express');
const cors = require('cors');

const app = express();

const { productsRouter } = require('./routes/products.routes');

const { getImage } = require('./controllers/public.controller')

const port = 3000;

app.use(cors());
app.get('/', (_, res) => {
	res.send('Hello World!');
});

app.get('/public/img/:deviceType/:deviceName/:deviceColor/:image', getImage);

app.use('/products', productsRouter);

app.listen(port, () => {
	// eslint-disable-next-line no-console
	return console.log(`Express is listening at http://localhost:${port}`);
});
