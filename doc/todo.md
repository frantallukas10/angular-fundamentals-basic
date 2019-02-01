### - Display data

#### Property binding example

```js
title = "Title";
imageUrl = "./assets/dog.jpg";
```

```html
<h2>{{ title }}</h2>
<h2 [textContent]="title"></h2>

<img src="{{ imageUrl }}" /><br />
<img [src]="imageUrl" /><br />
```

#### Attribute binding example

```js
colSpan = 2;
```

```html
<td [attr.colspan]="colSpan">1 row</td>
```

#### Adding bootstrap liberary<br>

first you need install it with command line:

```
npm i bootstrap --save
```

add import to global styling file styles.scss

```scss
@import "~bootstrap/dist/css/bootstrap.css";
```

and using in HTML example

```html
<button class="btn btn-primary">button with bootstrap classes</button>
```

#### Class binding

```js
isActive = true;
```

```html
<button class="btn btn-primary" [class.active]="isActive">
  button with class binding
</button>
```

#### Style binding

```js
isActive = true;
```

```html
<button
  class="btn btn-primary"
  [style.backgroundColor]="isActive ? 'red' : 'white'"
>
  button with style binding
</button>
```

#### Event binding

```js
onSave($event) {
  // stop bubbling propagation
  $event.stopPropagation();
  console.log("Button was clicked", $event);
}
onDivClicked() {
  console.log("Div was clicked");
}
```

```html
<div (click)="onDivClicked()">
  <button
    class="btn btn-primary"
    (click)="onSave($event)"
    [style.backgroundColor]="isActive ? 'red' : 'white'"
  >
    button with event binding
  </button>
</div>
```

#### Event filtering

```js
onKeyUp($event) {
  if ($event.keyCode === 13) {
    console.log("ENTER was pressed");
  }
}
onKeyOnlyForEnter() {
  console.log("ENTER was pressed without keyCode");
}
```

```html
<label for="filtering">Event filtering</label>
<input id="filtering" (keyup)="onKeyUp($event)" />
<!-- or shorter version -->
<label for="filtering-shorter">Event filtering shorter</label>
<input id="filtering-shorter" (keyup.enter)="onKeyOnlyForEnter()" />
```

#### Template variable

```js
outputValue = "";
outputValueEmail = "";

targetValue($event) {
  console.log($event.target.value);
  this.outputValue = $event.target.value;
}

targetValueEmail(email) {
  console.log(email);
  this.outputValueEmail = email;
}
```

```html
<label for="template">Template variable {{ outputValue }}</label>
<input id="template" (keyup.enter)="targetValue($event)" />
<!-- or -->
<label for="template-email"
  >Template variable email {{ outputValueEmail }}
</label>
<input
  id="template-email"
  #email
  (keyup.enter)="targetValueEmail(email.value)"
/>
```

#### Two-way binding

```js
emailFirst = "me@example.com";
emailSecond = "me@example.com";

targetValueEmailFirst() {
    console.log(this.emailFirst);
  }

  targetValueEmailSecond() {
    console.log(this.emailSecond);
  }
```

```html
<label for="emailFirst"> Two-way binding email {{ emailFirst }} </label>
<input
  id="emailFirst"
  [value]="emailFirst"
  (keyup.enter)="emailFirst = $event.target.value; targetValueEmailFirst()"
/>
<!-- or shorter and cleaner -->
<label for="emailSecond"> Two-way binding email {{ emailSecond }} </label>
<input
  id="emailSecond"
  [(ngModel)]="emailSecond"
  (keyup.enter)="targetValueEmailSecond()"
/>
```

if you use `[(ngModel)]` you have to import formModule for app.module.ts file

```js
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ...
  ],
  imports: [BrowserModule, FormsModule],
  providers: [...],
  bootstrap: [AppComponent]
})
```
