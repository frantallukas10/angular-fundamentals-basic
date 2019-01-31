import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example-display-data",
  templateUrl: "./example-display-data.component.html",
  styleUrls: ["./example-display-data.component.scss"]
})
export class ExampleDisplayDataComponent implements OnInit {
  constructor() {}

  title = "Title";
  imageUrl = "./assets/dog.jpg";

  colSpan = 2;

  isActive = true;

  outputValue = "";
  outputValueEmail = "";

  emailFirst = "me@example1.com";
  emailSecond = "me@example2.com";

  // ------------------------------------------------
  // Event binding
  onSave($event) {
    // stop bubbling propagation
    $event.stopPropagation();
    console.log("Button was clicked", $event);
  }
  onDivClicked() {
    console.log("Div was clicked");
  }

  // ------------------------------------------------
  // Event filtering
  onKeyUp($event) {
    if ($event.keyCode === 13) {
      console.log("ENTER was pressed");
    }
  }

  onKeyOnlyForEnter() {
    console.log("ENTER was pressed without keyCode");
  }

  // ------------------------------------------------
  // Template variable
  targetValue($event) {
    console.log($event.target.value);
    this.outputValue = $event.target.value;
  }

  targetValueEmail(email) {
    console.log(email);
    this.outputValueEmail = email;
  }

  // ------------------------------------------------
  // Two-way binding
  targetValueEmailFirst() {
    console.log(this.emailFirst);
  }

  targetValueEmailSecond() {
    console.log(this.emailSecond);
  }

  ngOnInit() {}
}
