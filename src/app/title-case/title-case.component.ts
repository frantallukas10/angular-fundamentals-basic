import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'titleCase',
  templateUrl: './title-case.component.html',
  styleUrls: ['./title-case.component.scss']
})
export class TitleCaseComponent implements OnInit {
  title: string = 'the rise of the planet of the apes';

  constructor() { }

  ngOnInit() {
  }

}
