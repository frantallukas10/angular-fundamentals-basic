import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { SummaryPipe } from "./summary.pipe";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses/courses.component";
import { AuthorsComponent } from "./authors/authors.component";

import { CoursesService } from "./courses.service";
import { AuthorsService } from "./authors.service";
import { FavoriteComponent } from "./favorite/favorite.component";
import { TitleCaseComponent } from "./title-case/title-case.component";
import { TitleCasePipe } from "./title-case.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCaseComponent,
    TitleCasePipe
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [CoursesService, AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
