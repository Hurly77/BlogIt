---
title: 'Static Generation with getStaticProps'
image: 'static-generation-with-getStaticProps.png'
date: '2021-04-22'
excerpt: Static Generate means that we Pre-generate a page during build time. This way, all HTML data that make up the content is already loaded into the page during the build time. By build, I mean that the app is pre-rendered during the app’s deployment.
isFeatured: false
---

**Static Generate** means that we Pre-generate a page during build time. This way, all HTML data that make up the content is already loaded into the page during the build time. By build, I mean that the app is pre-rendered during the app’s deployment.

After your app has been deployed, pages are prepared ahead of time. Allowing them to be cached by the server/ **CDN**(content delivery network) serving the app. Now when a client requests the server, the pages can be severed to the client if any incoming requests are being resolved.

Only inside the pages folder, we can use :

> **Can be added to any page file under the pages directory**

```js
export async function getStaticProps(context){...0}
```

NextJS will automatically pre-generate. But we want to tell NextJS which files we wish to be pre-rendered; we can do that like so:

```js
const HomePage = (props) => {
	return (
    	<div>
        	<li></li>
            <li></li>
            <li></li>
        </div>
    )
}
// we always want to return an object with a key props
// The cool thing about this function is that instead of rendering the component function first we'll execute the getStaticProps function get our data and then render that data into the HomPage component.
export const getStaticProps = async() => {
    return {props: {
        products: [id: 'p1', title: 'Product 1']
    }}
}

export default HomePage
```

NextJS first executes the **getStaticProps** and then renders the **HomePage()** component.

**getStaticProps** not only allows us to write server-side code but also allows us to import node modules such as **fs** node files system.

```js
//as long as we don't attempt to use this in the client side code Next will split this away from the client side render. so the client wont see this import.
import fs from 'fs'
...
export const getStaticProps = async() => {
//normally we would not be able to run the fs.readFile() method but with Next we can actually import this in here and use the same way we would in a node application.
    fs.readFileSync()

    return {props: {
        products: [id: 'p1', title: 'Product 1']
    }}
}
```

Other cool things we can do with NextJS.

```js
//we can actually import what ever node modules we want as long as we only use them in the getStaticProps method
import path from 'path';
...
export const getStaticProps = async() => {
    //process is a global object that can be accessed anywhere with in a node application. Because nextJS doesn't read getStaticProps as a client file we can use the process object.

    //cwd = current working directory. and will actually view the current directory as the top level.
 const filePath = path.join(process.cwd())
    return {props: {
        products: [id: 'p1', title: 'Product 1']
    }}
}
```

> SIDE NOTE: keep in mind that **JSON**, is a global object just on both browser-side and with node.

We can test our build by running

```js
npm run build
npm start
```

This will allow us to see what is being built for our application…
