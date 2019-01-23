import { Component, OnInit } from '@angular/core';
import { CoursesService } from "../courses.service";

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  title = "List of courses";
  colspan = 2;
  courses;
  isActive = false;

  constructor(service: CoursesService) {
    // let service = new CoursesService();
    this.courses = service.getCourses();
  }

  ngOnInit() {
  }

  onDivClicked() {
    console.log('Div was clicked');
  }

  onSave($event) {
    $event.stopPropagation() // stop event Bubbling
    console.log('Button was clicked');
  }
  // ----------------------------------------------
  // onKeyUp($event) {
  //   if($event.keyCode === 13) {
  //     console.log("Enter was pressed", $event.target.value);
  //   }
  // }
  // ----------------------------------------------
  // onKeyUp() {
  //   console.log("Enter was pressed");
  // }
  // ----------------------------------------------
  // onKeyUp(email) {
  //   console.log(email);
  // }
  // ---------------------------------------------- two way binding
  email = "me@example.com"
  onKeyUp() {
    console.log(this.email);

  }

  pipeExample = {
    title: "The Complete Angular Course",
    students: 30123,
    rating: 4.9745,
    price: 190.95,
    releaseData: new Date()
  }

  pipeCustom = `
    Pastry icing donut powder candy. Bear claw icing cupcake brownie muffin toffee pudding tootsie roll. Jelly beans chocolate sweet oat cake carrot cake marzipan.
  `
}
