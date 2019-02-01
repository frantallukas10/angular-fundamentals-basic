### - Directives

Directive use for manipulating the DOM.<br>

```js
*ngFor=""
```

we can use it for add of the DOM element, remove existing of the DOM element, change class of the DOM element or style<br>

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

[&#129188; späť](../README.md)<br>
