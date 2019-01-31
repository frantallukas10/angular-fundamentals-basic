import { Injectable } from "@angular/core";

@Injectable()
export class ExampleService {
  getCourses() {
    return ["course1", "course2", "course3"];
  }
}
