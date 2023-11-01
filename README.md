# Product Catalog BE

A brief description of what this project does and who it's for

# Installation

Clone the repo and then run `npm install` command to download dependencies.


# Usage

To run the server in dev mode(watch for changes and restart on update) use `npm run dev`.

The server will be opened on `http://localhost:3000`


# Product catalog API

A short description how to interact with this API and what it returns.


## API Reference


Base URL `https://pt-api-8nrp.onrender.com`

## Models

#### 1. Product
```
{
  id: number,
  category: string,
  itemId: string,
  name: string,
  fullPrice: number,
  price: number,
  screen: string,
  capacity: string,
  color: string,
  ram: string,
  year: number,
  image: string
}
```

#### 2. Details

```
{
  id: string,
  namespaceId: string,
  name: string,
  capacityAvailable: string[],
  capacity: string,
  priceRegular: number,
  priceDiscount: number,
  colorsAvailable: string[],
  color: string,
  images: string[],
  description: object[
    {
      title: string,
      text: string[]
    }
  ],
  screen: string,
  resolution: string,
  processor: string,
  ram: string,
  camera: string,
  zoom: string,
  cell: string[]
}
```


## Endpoints

#### 1. Get all items

```http
  GET https://pt-api-8nrp.onrender.com/products
```
#### Query Params
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `category`| `string` | **Required**. Valid data: 'phones', 'tablets' or 'accessories' |
| `limit`|`string`|**Required**. Used for db pagination. Valid data: `16` `8` `4`
|`offset`|`string`|Amount of pages to skip|
|`sortBy`|`string`|Type of sorting. Valid data: `newest`, `alphabetically`, `cheapest`|
|`query`|`string`|Query string to search by name of the product|
|`priceFrom`|`number`|A number > 0, which represents min price. Product price >= `priceFrom`|
|`priceTo`|`number`|A number > 0, which represents max price. Product price <= `priceTo`|

#### Response format:
    count: number.
    rows: Product[]

#### 2. Get image

```http
  GET https://pt-api-8nrp.onrender.com/public/${product.image}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `product.image`| `string` | **Required**. A path to an image, you got from products endpoint |

#### 3. Get item details by id

```http
    GET https://pt-api-8nrp.onrender.com/products/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`| `string` | **Required**. product itemId from GET all products |

#### Response format:
```
{
"product": Product,
"selectedProduct": Details,
"details": Details[],
}
```

#### 4. Get recommended items

```http
https://pt-api-8nrp.onrender.com/products/:id/recommended
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`| `string` | **Required**. product itemId from GET all products |

#### Response format:
```
{
    Product[]
}
```

#### 5. Get new items

```http
https://pt-api-8nrp.onrender.com/products/new
```

Returns an array of last year products from all categories

#### Response format:
```
{
    Product[]
}
```

#### 6. Get items on discount

```http
https://pt-api-8nrp.onrender.com/products/discount
```

Returns an array of items sorted by difference of price and fullPrice

#### Response format:
```
{
    Product[]
}
```
