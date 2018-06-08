# Angular Routing

Routing in angular is a way to show multiple views in a Single-page application systems. you will create a mapping of Path and Views - which will be used to decide which view will be visible and a given URL.

## Setting up your project

You can either `import` RouterModule from `@angular/router` for attaching routes to your existing angular project. However if you are starting afresh, you can create a Routing enabled project by typing commands as

```javascript
ng new routingdemo --routing
```

This will create a new Angular 6 application with routing modules included. You can check out `app-routing.module.ts` file which will have `routes` Array. This array will have all your routeObjects. 

```javascript
const routes: Routes = [];
```

Below this you will find this  

```javascript
  imports: [RouterModule.forRoot(routes)],
```

This line is importing `RouterModule` and adding the `routes` array to list of possible routes. Below this you will find `exports` statment which will export this module with all these attched `routes`.

## Setting up routes

Assuming that you have created two components `first` and `second` with Class Name `FirstComponent` and `SecondComponent`, We can attach these views to your `routes` array in following manner  

```javascript
const routes: Routes = [
    {path:'first',component:FirstComponent},
    {path:'second',component:SecondComponent}
    ];
```

Here `first` and `second` are paths which can be added to your domain name to call the view. e.g. `http://localhost:4200/first`

## Setting up Router Outlet

You generally setup your components inside root component i.e. `app.component.html`. Here we will place `<router-outlet></router-outlet>` at any place in root component. This tag will act as the placeholder where our component will be inserted based on the path you choose from URLs.

## Setting up Router Links

Finally to test out whether all your paths are working properly, we can add few `routerLink` attributes to any HTML tags to test.

I am adding links in root component itself

```javascript
      <a routerLink="first">Link to first page</a>
      <a routerLink="second">Link to second page</a>

      <router-outlet></router-outlet>

```

Check now you can now switch between the two components. Links will be always visible as they are outside the router outlet.

## Mini Project 2

### Converting Photogram,Bloggr,Twtr,EShoppie to Angular Project

1. Pick your `tabler-dev` theme. Don't use the `jQuery` version of assignment. Use the fresh theme package zip.
2. You have to create the same kind of application as in Assignment 4. Only difference being code should be done in Angular 6. You will have to divide the theme in components like "header", "footer", "content", "cards" etc.
3. Use a JSON array to represent all your cards in your project. A `*ngFor` will create cards according to data. No static card will be there if your array is empty.
4. You will have to create a form to enter all info of a new card. Don't use `prompt` now.
5. All CSS files can be used in global `index.html` or `angular.json` file to have proper linking. Also you can use `assets` folder to host all files - you might have to change paths.
6. All pages `login`, `signup`, `form` will be separate components. Main page such as `gallery` page can be a component containing multiple components - `header`, `footer` and `card` components
7. All pages will be linked via `Routing`.
8. Data of JSON format will be stored under `Services` which can share data between components.That means all your cards must be generated via some data in `Service` and not directly written in HTML.
9. From login page you must be able to pass data of username to top of header component in next page.
10. Form data should create in new cards in your respective project. That data will be shared via services.
