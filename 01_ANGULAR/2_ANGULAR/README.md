# ANGULAR - First Application

## Setup Requirements

* Go here and prepare your setups. [Install Angular](https://angular.io/guide/quickstart)
* Check `ng` command is working on you command prompt.
* You are ready !!!

## First Angular App

* Go to directory where you want to create your new project.
* On CMD/terminal type `ng new <yourprojectname>`. It will take sometime to setup all the requirements.
* On completion move inside the project folder i.e. `<yourprojectname>` and enter command `npm start` to start the project.
* By default, Angular app will open on `localhost:4200`

## Angular Concepts

* File Structure of Module and Components.

`Module` - this is the top level structure in which you import other modules. Generally you can find a file called `app.module.ts` which will contain the module. This contains `root` component and other normal component `declarations`.

* Component Decorators

`Component` - this is basic buidling block of an application.

Components can be generated via generate command :

```javascript
  ng generate component list
```

This above command will generate the list component.
A component is represented by `@Component` decorator which will be inside `.ts` file of a component generated. This will look like:

```javascript
@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
```

`selector` - this is the way component will be called in HTML files. e.g. `<list></list>`
`templateUrl` - location of HTML of this component
`styleUrls` - location of CSS files which are applied on this component. You can apply multiple CSS files.

* Interpolation / Data Binding

`{{name}}` - Interpolation brackets are used to denote that name is a variable in Angular Class and is not be used as HTML string.

`[ngClass]="className"` - Single way data-binding.It means `className` is a variable not a string.

`[(ngModel)]="text"` - Two way data-binding.It means `className` is a variable not a string and ngModel will change `text` value on each event of Change in Input.

* Event Binding

 `click` - This is one of event which can be used in Angular. Any event can be put on any element of html.

 ```javascript
 <button (click)="add()">Add Item</button>
 ```

 In above example, button has an `click` event and it will call a `add` function on click.

### Syntax and Usage of Directives

#### ngModel

`ngModel` - To use this you have to import `FormsModule` to `app.module.ts`. you will have to use `import` in module file.

```javascript
 import { FormsModule } from '@angular/forms';
```

```javascript
  <input type="text" [(ngModel)]="newTask">
```

This will 2-way bind input box to a variable `newTask`.

#### ngFor

`ngFor` - To use this you will need an array or collection on which you can iterate.

```javascript
<li *ngFor="let task of tasks">
```

This will create multiple elements of type `li` or any tag which has `ngFor`.

#### ngClass

`ngClass` - This will help you in applying a `class` attribute on any html tag - based on a condition.

```javascript
 <li [ngClass]="{'green':name =='sachin'}"></li>
 ```

 The above example shows that list item will have `green` class applied - only if `name` variable has value `"sachin"`

 You can also apply multiple class condition at once.

```javascript
 <li [ngClass]="{'green':name =='sachin', 'red':name== 'virat'"></li>
 ```

 The above example shows that list item will have `green` class applied - only if `name` variable has value `"sachin"` and will have `red` class applied - only if `name` variable has value `"virat"`

#### ngIf

 `ngIf` - This is a conditional operator which lets you control when a element is created or not

 ```javascript
 <li *ngIf ="name =='sachin'"></li>
 ```

#### ngStyle

`ngStyle` - This will help you in applying a inline-css style via `style` attribute on any html tag - based on a condition.

You can also apply multiple class condition at once.

```javascript
 <li [ngStyle]="{'background-color':color;}"></li>
 ```

 The above example shows that list item will have background color which is defined in `color` variable. Please take care that `color` is a variable here and not a `string`. So if `color` has value `"blue"` - background becomes blue.

## Assignment 5

Create a complete Todo List web application which can manage your daily tasks. These are the feature required in list.

* You can add new tasks to list.
* You can remove a task from the list by delete button.
* You can edit a task from your list and change its "text".
* You can change status of task to `done` or `pending`. This can be done using list item colors. You can click on a task to change its status.
* You should show at top of list : Number of total task in List and Number of Pending Tasks i.e. Tasks - (3/10). Which means 3 tasks are pending out of total 10 tasks.
* You can give an entry and exit animation to each list item using `animate.css`.
* You can optional use bootstrap classes for improving the overall UI/UX
* Add a `createdAt` time to each list item object - and list should show the date a item was created at.
* Add a priority to be added to each item like - High, Medium, Low - You can show priority by background colors - Dark green : High priority, Normal green : Medium Priority, Light green - Low priority. You can use a dropdown to assign priorty while adding a new task.
