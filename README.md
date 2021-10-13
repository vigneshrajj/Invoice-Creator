
<h1 align="center">
  Invoicer
</h1>

<h4 align="center">An Invoice Creator built using ReactJS</h4>



<p align="center">
<a href="#demo">Demo</a> •
<a href="#key-features">Key Features</a> •
<a href="#technologies-used">Technologies Used</a> •
<a href="#how-to-setup">How To Setup</a> •
<a href="#to-do">To do</a> •
<a href="#license">License</a>
<br/>
</p>

[![GitHub top language](https://img.shields.io/github/languages/top/vigneshrajj/react-Invoice-App)](<![GitHub top language](https://img.shields.io/github/languages/top/vigneshrajj/react-Invoice-App)>)
![GitHub followers](https://img.shields.io/github/followers/vigneshrajj?style=social)

## Demo
Here is a working demo:-
https://invoice-app-vignesh.netlify.app/
## Key Features

* Create Invoices for the products or service that you offer
![](https://github.com/vigneshrajj/Invoice-Creator/blob/master/images/create-invoice.png)
* Add status to the invoice to keep track of paid and pending invoices
* Get a detailed view for each invoice
![](https://github.com/vigneshrajj/Invoice-Creator/blob/master/images/view-invoice.png)
* Download invoices to PDF format to make it available offline or send it to the client
* Filter invoices by date or status to find out the pending payments
* Get detailed Stats about your clients and invoices
![](https://github.com/vigneshrajj/Invoice-Creator/blob/master/images/home.png)
* Search Invoices
* Send invoices to returning clients through Send again section
## Technologies used
#### Client-Side
- ReactJS
- Redux
- TailwindCSS
- SCSS
- Recharts
- ViteJS
- jsPDF
#### Server-Side
- ExpressJS
- Mongoose
- JWT
- Google oauth
- BCrypt
- Cookie-parser
#### Database
- MongoDB
#### Deployment
- Netlify - Client
- Heroku - Server
- MongoDB Atlas - Database
## How To Setup

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/vigneshrajj/React-Invoice-App

# Go into the server folder
$ cd React-Invoice-App/server/

# Install dependencies
$ npm run devInstall

# Run the app
$ npm run dev
```
## To do
- [ ] Remove persistent error messages on login and signup page
- [ ] Fix routing issue on page reload in netlify
- [ ] Update animations for invoice table and search results
- [ ] Fix accessibility warnings

## [License](https://github.com/vigneshrajj/Invoice-Creator/blob/master/LICENSE)

MIT © [Vignesh Raj](https://github.com/vigneshrajj)
