import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example-interpolation",
  templateUrl: "./example-interpolation.component.html",
  styleUrls: ["./example-interpolation.component.scss"]
})
export class ExampleInterpolationComponent implements OnInit {
  title = "List of courses";
  courses = ["course1", "course2", "course3"];

  constructor() {}

  ngOnInit() {}

  // string interpolation
  getTitle() {
    return this.title;
  }
}
