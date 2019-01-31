import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ExampleInterpolationComponent } from "./example-interpolation/example-interpolation.component";
import { ExampleDirectiveComponent } from "./example-directive/example-directive.component";

import { ExampleService } from "./example-services/example.service";
import { ExampleServicesComponent } from "./example-services/example-services.component";
import { ExampleDisplayDataComponent } from "./example-display-data/example-display-data.component";

@NgModule({
  declarations: [
    AppComponent,
    ExampleInterpolationComponent,
    ExampleDirectiveComponent,
    ExampleServicesComponent,
    ExampleDisplayDataComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  // dependency injection
  providers: [ExampleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
