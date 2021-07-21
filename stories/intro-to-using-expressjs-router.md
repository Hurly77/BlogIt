---
title: 'Intro to using Express.js Router'
image: ''
date: '2021-2-25'
excerpt: 'When we start bringing in routes to Express.JS, we want to separate routes into another folder.'
isFeatured: false
---

When we start bringing in routes to Express.JS, we want to separate routes into another folder.

This what our file structure should look like

    ___________________
    > Node_modules
    > Routes
    — — — home.js
    — — — users.js
    app.js
    package-lock.json
    package.json

    _____________________

In each route file, we will want to import express and Router()

```javascript
const express = require(‘express’);
//this is like creating a mini express app, or a plugin
const router = express.Router();//syntax include, remember that all of these are functions.
router.use; //important to keep in mind that this does not to an exact route match
//get, post, put, delete will all do and exact route match
router.get;
router.post;
router.put;
//not one hundred on this but I’m sure that destroy is something like this
router.delete;module.exports = router;
```

To use our new route files, we have to import them and call them with the use() express method.

```javascript
//IN app.js
const express = require('express');
const app = express();const myRoute = require('./routes/<file name>');
const anotherRoute = require('./routes/<another file name>')const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))app.use(myRoute)
app.use(anotherRoute)app.listen(3000)//easy peasy
```

## Let us make a 404 error.

```javascript
//js executes from top to bottom
...app.use((req, res, next)=>{
 res.status(404).send('<h1>Page not found</h1>');
 })
//we can always chain res whit .status(code number) or .setHeaders(header)app.listen(3000)
```

## Filtering Paths

Another cool feature of express.js is we can filter paths.

```javascript
//all we have to do is add and argument to app.use('/route', routeName)
...
app.use('/admin', adminRoutes)app.listen(3000)
// keep in mind this only works if your have to routes with the same path but not the same method like sorouter.get('/add-product', (req, res, next) => {
  res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button>Add Product</button></form>')
});
//notice that the acton still uses /admin that is becuse we will still be going to /admin/add-productrouter.post('/add-product', (req, res, next) => {
  console.log((req.body.title))
  res.redirect('/')
})
//again we redirect to /admin/add-product
```
