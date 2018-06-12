# Angular and HTTP

Understanding how web works can be very intimidating for someone who is new to networking. However we can talk about few topics which are useful to understand all these concepts.

* Client or Browser
* Server
* HTTP packets - Request and Response
* Request Types - GET, POST, HEAD, PUT, DELETE etc.
* Response status - OK, Not Found, Forbidden etc.
* Request and Response Headers
* AJAX requests
* Query Strings - GET requests
* Request Body - POST requets
* Chrome Network tab ( to watch all network activities)

Many of these topics are covered in this article [Here](https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)

## Angular HTTP Module

In Angular 6 - Angular HTTP module is imported from `@angular/common/http`

```javascript

import {HttpClientModule} from '@angular/common/http';

```

Following common pattern of Angular, we will import Angular Modules in `import` section of NgModule declaration.

After this we can use `HTTPClient` service in any component or service.

## Angular HTTPClient Service

You can use `HTTPClient` service directly in your components

```javascript

import {HttpClient} from '@angular/common/http';  //At top

....
// in constructor
constructor(private http:HttpClient){

  }
// call get method and pass some URL. you can subscribe to result of this Observable.
this.http.get(this.url).subscribe((data)=>{

    //get data  here
})
...

```

## Assignment 7

Create a currency converter using free public APIs.

* Create a simple dropdown to choose `base` and `target` currencies.
* Use a box for amount to be converted
* Use a simple output box to show the output. It can also be an input box (if you want two way conversion of currencies).
* You can use public API like : https://exchangeratesapi.io/api/latest?base=USD
