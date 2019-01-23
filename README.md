# Angular

- Components
- Templates
- Directives
- Services

To install the CLI using npm, open a terminal/console window and enter the following command:<br>

```js
npm install -g @angular/cli
```

Run the CLI command ng new and provide the name my-app, as shown here:<br>

```js
ng new my-app
```

Launch the server by using the CLI command ng serve, with the --open option.<br>

```js
cd my-app
ng serve --open
```

## Components

Using the Angular CLI, generate a new component.<br>

```js
ng generate component nameComponent
```

shorter

```js
ng g c nameComponent
```

### Built-in Pipes [https://angular.io/api/common/DatePipe](https://angular.io/api/common/DatePipe)

- Uppercase
- Lowercase
- Decimal
- Currency
- Percent

## Services

Using the Angular CLI, create a service.<br>

```js
ng generate service nameService
```

shorter

```js
ng g s nameService
```
