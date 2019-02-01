### - Services

Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data. They should focus on presenting data and delegate data access to a service.

Using the Angular CLI, create a service.<br>

```js
ng generate service nameService
```

shorter

```js
ng g s nameService
```

[&#129188; späť](../README.md)<br>
