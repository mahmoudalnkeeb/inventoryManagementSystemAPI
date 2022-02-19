# Endpoints

## Get All Products

- ENDPOINT

    `https://imsapi.onrender.com/products/`

- METHOD

    - GET

- BODY

    - N/A
 
## Get All Sold Out Products

- ENDPOINT

    `https://imsapi.onrender.com/products/sold`

- METHOD

    - GET

- BODY

    - N/A
## Get One Product

- ENDPOINT

    in case of search by name

    `https://imsapi.onrender.com/products/search?name=product_name`

    in case of search by price

    `https://imsapi.onrender.com/products/search?price=product_price`

    in case of search by category

    `https://imsapi.onrender.com/products/search?category=category_name`

- METHOD

    - GET

- BODY

    - N/A

## Create Product

- ENDPOINT

    `https://imsapi.onrender.com/products/`

- METHOD

    - POST

- BODY

    
    name : string

    price : number

    taxes : number

    ads : number

    discount : number

    count : number

    category : string 
    

## Update Product

- ENDPOINT

    `https://imsapi.onrender.com/products/`

- METHOD

    - PUT

- BODY

    filter : product id => string

    name : string

    price : number

    taxes : number

    ads : number

    discount : number

    count : number
    
    category : string 

## Delete Product

- ENDPOINT

    `https://imsapi.onrender.com/products/`

- METHOD

    - DELETE

- BODY

    filter : product id => string
