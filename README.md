# Angular

## Instalation

To install the CLI using npm, open a terminal/console window and enter the following command:<br>

```js
npm install -g @angular/cli
```

## Create new angular project

Run the CLI command ng new and provide the name my-app, as shown here:<br>

```js
ng new my-app
```

## Run angular

Launch the server by using the CLI command ng serve, with the --open option.<br>

```js
cd my-app
ng serve --open
```

## Angular Fundamentals:

- Components
- Templates
- Directives
- Services

### Components

encapsulates data, HTML template, logic.<br>
Root component is app component.<br>
If you want create components you need register it in a module and add an element in an HTML markup.

### Create a component

Using the Angular CLI, generate a new component.<br>

```js
ng generate component nameComponent
```

shorter

```js
ng g c nameComponent
```

### Directive

Directive use for manipulating the DOM<br>

```js
*ngFor=""
```

we can use it for add of the DOM element, remove existing of the DOM element, change class of the DOM element or style

```html
<ul>
  <li *ngFor="let course of courses">{{ course }}</li>
</ul>
```

or we can use it like this

```html
<ul>
  <ng-template ngFor let-course [ngForOf]="courses">
    <li>{{ course }}</li>
  </ng-template>
</ul>
```

### Services

Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data. They should focus on presenting data and delegate data access to a service.

Using the Angular CLI, create a service.<br>

```js
ng generate service nameService
```

shorter

```js
ng g s nameService
```

### Dependency Injection

### Built-in Pipes [https://angular.io/api/common/DatePipe](https://angular.io/api/common/DatePipe)

- Uppercase
- Lowercase
- Decimal
- Currency
- Percent
