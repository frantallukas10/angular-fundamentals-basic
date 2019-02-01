import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example-custom-pipes",
  templateUrl: "./example-custom-pipes.component.html",
  styleUrls: ["./example-custom-pipes.component.scss"]
})
export class ExampleCustomPipesComponent implements OnInit {
  text = `Cupcake ipsum dolor sit amet. Pudding cake cake bonbon fruitcake. Ice cream oat cake sesame snaps muffin.`;
  constructor() {}

  ngOnInit() {}
}
