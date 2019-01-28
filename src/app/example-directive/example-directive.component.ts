import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example-directive",
  templateUrl: "./example-directive.component.html",
  styleUrls: ["./example-directive.component.scss"]
})
export class ExampleDirectiveComponent implements OnInit {
  authors = ["author1", "author2", "author3"];

  constructor() {}

  ngOnInit() {}
}
