import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ExampleInterpolationComponent } from "./example-interpolation/example-interpolation.component";
import { ExampleDirectiveComponent } from "./example-directive/example-directive.component";

import { ExampleService } from "./example-services/example.service";
import { ExampleServicesComponent } from "./example-services/example-services.component";

@NgModule({
  declarations: [
    AppComponent,
    ExampleInterpolationComponent,
    ExampleDirectiveComponent,
    ExampleServicesComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [ExampleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
