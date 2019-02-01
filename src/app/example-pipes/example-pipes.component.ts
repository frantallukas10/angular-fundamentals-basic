import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example-pipes",
  templateUrl: "./example-pipes.component.html",
  styleUrls: ["./example-pipes.component.scss"]
})
export class ExamplePipesComponent implements OnInit {
  course = {
    title: "The complete Anfular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    realeaseDate: new Date(2019, 1, 2)
  };
  constructor() {}

  ngOnInit() {}
}
