<br/><br/>
<br/><br/>

<p align="center">
    <img height="50" src="https://rooftop.dev/images/rooftop-logo.webp">
   </p>
   
   

   <h1 align="center">Products Shop - Rooftop Challenge</h1>
   
   
### [📖 Go to CHANGELOG.md to see the changelog](CHANGELOG.md)

  
## The challenge

The project manager tells us that he spoke with a new client, who is not very determined yet, but he knows that he needs an e-commerce, an online store. 
A MVP is enough for now, so we'll start with some basic things that are essentials.

### 👉 Requirements 

He asks us that the site contain at least 3 pages

- home
- Catalogue
- Product detail

### 👉 Data

Where do I get the data to achieve  the order?

We have enabled a REST API so you can consume and do the exercise.

The information you will use is already provided by us through a REST API.

API is in the domain https://rooftop-api-rest-frontend.herokuapp.com/.

You have 2 endpoints: items and questions

#### Items
- Only accept GET requests.
- To do the product data exercises you should use the endpoint items.
- You can pass a parameter for querystring that says limit = 4 and it will return only that amount of products.

#### Questions

- Accepts GET and POST requests
- When you show the detail of the product you should also show all the comments of the same, but that does not come with the product but you ask it separately from the 
  endpoint questions passing through querystring the parameter item_id = 1 and it will return the questions associated with the product of the id you indicated. 
  Keep in mind that it is possible that in some product there are no questions.
- When clicking the form to send questions, you must use "POST" towards questions endpoint.

Below we detail what should go on each page, appearing in the order in which it is mentioned:

#### Home

- A main banner
    - To start with, it can be with 1 single static image
    - But the ideal is that it be up to 3 dynamic images.
- A list with 4 random products
    - To make it random we recommend using this library https://underscorejs.org/ #shuffle method.
    
 ### Catalogue
 



## Demo


## Project

### Tools

- React.js
- Vite.js
- Bootstrap
- React-Bootstrap
- Formik
- Yup
- Axios
- Release-it

### Project Structure
The files are structured as follow:

    .
    ├── public              # Static Files
    ├── src
        ├── assets          # App resources like images
        ├── components      # Stateless components
        ├── Context         # Global state  
        ├── models          # Entities
        ├── screens         # Pages that make up the app 
        ├── services        # Set of software functionalities that different clients can reuse for different purposes
        ├── types           # custom types
        App.css
        App.tsx
        main.tsx
    ├── CONTRIBUTING.md      # Document the conventions used in this project.
    └── README.md            # The first page that the user will view when will visit the repository.

## Requirements
* npm or yarn
* Git

## Local deployment

* Clone repository.
* Execute the command `npm install`
* Execute the command `npm run dev`

  
