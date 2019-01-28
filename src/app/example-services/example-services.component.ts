import { Component, OnInit } from "@angular/core";
import { ExampleService } from "./example.service";

@Component({
  selector: "app-example-services",
  templateUrl: "./example-services.component.html",
  styleUrls: ["./example-services.component.scss"]
})
export class ExampleServicesComponent implements OnInit {
  title = "List of courses";
  courses: any;
  // where we can initials services
  constructor(service: ExampleService) {
    this.courses = service.getCourses();
  }

  ngOnInit() {}
}
