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
 - Product list.
 - For each product a photo, a title and the price will be shown.
 - If the product is on sale, only the sale price should be shown in green.
 - Each list item must be clickable to go to the detail page

### Detail
- On the detail page you can see all the product information.
- Product photos must be displayed in gallery form
    - You can use this library https://www.npmjs.com/package/react-image-gallery.
    - It is necessary that the arrows always appear on both sides.
    - And that can be seen in full screen mode.
- There should be a form to leave inquiries about the product.
    - Only one large text field is required for the query message.
        - Validate that the message contains between 10 and 500 characters.
    - And a text field for the email
        - Validate that the text is a valid email.
    - Button to send the request.
    - To validate you can use https://www.npmjs.com/package/react-hook-form.
- Products that are on sale have a sale end date.
    - You have to show something that says "this offer ends in XX days XX hours".
    - To calculate the difference between dates you can use https://day.js.org/.


###  👉 To All Site

- A top menu that fills 100% of the width, containing the logo on the left.
- A footer with the copyright that says the current year using programming.
- We must use a special font throughout the site called "Mulish".
- The default color for all font on the site is # 252525.
- The background must be white.
- Container boxes can have a 1px, solid, light gray border.



## Demo


## Project

### Tools

- React.js
- Vite.js
- Bootstrap
- React-Bootstrap
- React Router
- React Redux
- React Image Gallery
- Dayjs
- Undescore
- Formik
- Yup
- Axios
- Release-it

### Project Structure
The files are structured as follow:

    ├── src
        ├── assets          # App resources like images
        ├── components      # Stateless components
        ├── interfaces     
        ├── layouts         # At this moment it contain only App Layout but there could be more in the future
        ├── models          # Entities used in the App.
        ├── pages           # Pages that make up the app 
        ├── redux           # Management of the global state of the application.
             ├── actions
             ├── reducers
             productService.ts
             store
        ├── utils           # Functions that are defined in one place and can be consumed by the entire application.
        App.tsx
        index.css           # Global styles
        main.tsx
    ├── CONTRIBUTING.md      # Document the conventions used in this project.
    └── README.md            # The first page that the user will view when will visit the repository.
    
Components folder is structured as follows:
- Ech component has a folder with the same name.
- Ech component has a index.ts which exports it by default.
- Ech component can have a style.css if necessary.
- Te component folder could contain any resource associated with the component such as its tests
- Components folder contain a global index.ts that exports each component by default
    - This allows to export components as in the following example 
    
            import { Component1, Component2, ...) from "src/components"

### Commits convention

To commit the changes, the conventional commits convention was followed. That is:

commit format:

    <type>[optional scope]: <description>
    
Conventional commit names

    feat: (new feature for the user, not a new feature for build script)
    
    fix: (bug fix for the user, not a fix to a build script)
    
    docs: (changes to the documentation)
    
    style: (formatting, missing semi colons, etc; no production code change)
    
    refactor: (refactoring production code, eg. renaming a variable)
    
    test: (adding missing tests, refactoring tests; no production code change)
    
    chore: (updating grunt tasks etc)

## Requirements
* npm or yarn
* Git

## Local deployment
* Clone repository.
* Execute the command `npm install`
* Execute the command `npm run dev`


## Documentation

-  Conventional commit  https://www.conventionalcommits.org/en/v1.0.0/
-  How to Write a Git Commit Message https://chris.beams.io/posts/git-commit/
-  React Skeleton Tutorial https://www.youtube.com/watch?v=cg_tmJBisp8
-  Eslint Documentation https://eslint.org/docs/user-guide/getting-started.
-  Prettier Documentation https://github.com/prettier/eslint-plugin-prettier.
-  Vitejs Documentation https://vitejs.dev/
-  React Bootstrap https://react-bootstrap.github.io/
-  Bootstrap https://getbootstrap.com/
-  REact Image Gallery https://www.npmjs.com/package/react-image-gallery
  
